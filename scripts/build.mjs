import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const dist = join(root, "dist");
const staticFiles = ["index.html", "styles.css", "script.js"];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of staticFiles) {
  const source = join(root, file);
  if (!existsSync(source)) {
    throw new Error(`Missing required static file: ${file}`);
  }

  cpSync(source, join(dist, file));
}

const indexHtml = readFileSync(join(dist, "index.html"), "utf8");
for (const reference of ["styles.css", "script.js"]) {
  if (!indexHtml.includes(reference)) {
    throw new Error(`index.html does not reference ${reference}`);
  }
}

execFileSync(process.execPath, ["--check", join(dist, "script.js")], {
  stdio: "inherit",
});

console.log("SmartSave build complete: dist/");
