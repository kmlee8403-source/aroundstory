import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isCloudflarePages = process.env.CF_PAGES === "1";
const isStaticExport = isGitHubPages || isCloudflarePages;
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "aroundstory";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      trailingSlash: true,
      ...(isGitHubPages ? { basePath: `/${repositoryName}` } : {}),
      images: { unoptimized: true },
      typescript: { tsconfigPath: "tsconfig.pages.json" },
    }
  : {};

export default nextConfig;
