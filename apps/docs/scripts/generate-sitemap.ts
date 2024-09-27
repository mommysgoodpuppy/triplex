/**
 * Copyright (c) Michael Dougall. All rights reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the LICENSE
 * file in the root directory of this source tree.
 */
import { execSync } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import readdirp from "readdirp";

const root = join(process.cwd(), "pages");
const sitemapLoc = join(process.cwd(), "public", "sitemap.xml");

function getLastModifiedDateTime(fullPath: string) {
  const result = execSync(
    `git log -1 --pretty="format:%ci" ${fullPath}`,
  ).toString();
  return result || undefined;
}

const changeHints = [
  ["/blog", "weekly"],
  ["/docs", "monthly"],
] as const;

const priorityHints = [
  ["/blog/", 0.6],
  ["/download", 0.9],
] as const;

async function main() {
  const sitemap = [];

  for await (const entry of readdirp(root)) {
    if (entry.path.endsWith(".mdx")) {
      const path = entry.path.replace(".mdx", "").replace("index", "");
      const url = "https://triplex.dev/" + path;

      sitemap.push({
        changeFrequency:
          changeHints.find(([hint]) => url.includes(hint))?.[1] ?? "yearly",
        lastModified: getLastModifiedDateTime(entry.fullPath),
        priority: path
          ? priorityHints.find(([hint]) => url.includes(hint))?.[1] ?? 0.5
          : // Root gets immediate 1 priority.
            1,
        url,
      });
    }
  }

  const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap
    .map((url) => {
      return `<url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
    })
    .join("\n  ")}
</urlset>
`;

  await writeFile(sitemapLoc, xml);
}

main();
