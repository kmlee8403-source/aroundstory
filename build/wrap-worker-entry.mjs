import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

if (process.env.CODEX_SKIP_CLOUDFLARE_PLUGIN === "1") {
  const entry = resolve(process.cwd(), "dist", "server", "index.js");
  const source = await readFile(entry, "utf8");
  const exportPattern = /export \{ ([A-Za-z0-9_$]+) as default, generateStaticParamsMap \};\s*$/;
  const match = source.match(exportPattern);

  if (!match) {
    throw new Error("Unable to locate the vinext worker export.");
  }

  const handler = match[1];
  const wrapped = source.replace(
    exportPattern,
    `const sites_worker_default = { fetch: ${handler} };\nexport { sites_worker_default as default, generateStaticParamsMap };\n`,
  );
  await writeFile(entry, wrapped, "utf8");
}
