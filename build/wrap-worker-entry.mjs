import { pathToFileURL } from "node:url";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

if (process.env.CODEX_SKIP_CLOUDFLARE_PLUGIN === "1") {
  const entry = resolve(process.cwd(), "dist", "server", "index.js");
  const moduleUrl = pathToFileURL(entry);
  moduleUrl.searchParams.set("render", Date.now().toString());
  const builtModule = await import(moduleUrl.href);
  const builtHandler = builtModule.default;
  const render = typeof builtHandler?.fetch === "function"
    ? builtHandler.fetch.bind(builtHandler)
    : builtHandler;

  if (typeof render !== "function") {
    throw new Error("Unable to locate the vinext request handler.");
  }

  const response = await render(
    new Request("https://aroundstory.local/", {
      headers: {
        accept: "text/html",
        host: "aroundstory.local",
        "x-forwarded-host": "aroundstory.local",
        "x-forwarded-proto": "https",
      },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Static render failed with status ${response.status}.`);
  }

  const html = await response.text();
  const workerSource = `const htmlTemplate = ${JSON.stringify(html)};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
      const page = htmlTemplate.replaceAll("https://aroundstory.local", url.origin);
      return new Response(page, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=0, must-revalidate",
        },
      });
    }
    if (env?.ASSETS?.fetch) return env.ASSETS.fetch(request);
    return new Response("Not found", { status: 404 });
  },
};
`;

  await writeFile(entry, workerSource, "utf8");

  const written = await readFile(entry, "utf8");
  if (!written.includes("export default") || !written.includes("htmlTemplate")) {
    throw new Error("Static worker entry validation failed.");
  }
}
