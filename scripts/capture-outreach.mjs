import { chromium } from "playwright";
import { mkdirSync, existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";

const OUT = "/workspace/public/outreach";
const LOCAL = "http://127.0.0.1:8080/";
const ORIGINAL = "https://www.bourkeconstructionoc.com/";
mkdirSync(OUT, { recursive: true });

function ok(path, minBytes = 20_000) {
  if (!existsSync(path)) throw new Error(`missing ${path}`);
  const n = statSync(path).size;
  if (n < minBytes) throw new Error(`${path} too small (${n})`);
  console.log("ok", path, n);
}

const browser = await chromium.launch({ args: ["--hide-scrollbars"] });

// BEFORE — live original
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto(ORIGINAL, { waitUntil: "domcontentloaded", timeout: 90_000 });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `${OUT}/before-original-desktop.png`,
    fullPage: true,
  });
  await page.close();
  ok(`${OUT}/before-original-desktop.png`);
}

// AFTER desktop 1440 full page
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto(LOCAL, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/after-desktop.png`, fullPage: true });
  await page.close();
  ok(`${OUT}/after-desktop.png`);
}

// AFTER mobile 390
{
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await page.goto(LOCAL, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/after-mobile.png`, fullPage: true });
  await page.close();
  ok(`${OUT}/after-mobile.png`);
}

// Scrolling recording
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    recordVideo: { dir: "/tmp/bourke-video", size: { width: 1440, height: 900 } },
  });
  await page.goto(LOCAL, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(700);
  const height = await page.evaluate(() => document.body.scrollHeight);
  const steps = 18;
  for (let i = 1; i <= steps; i++) {
    const y = Math.round((height * i) / steps);
    await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "smooth" }), y);
    await page.waitForTimeout(280);
  }
  await page.waitForTimeout(400);
  const video = page.video();
  await page.close();
  const vpath = await video.path();
  const mp4 = `${OUT}/after-scroll.mp4`;
  const gif = `${OUT}/after-scroll.gif`;
  const ff = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      vpath,
      "-an",
      "-vf",
      "fps=12,scale=960:-1:flags=lanczos",
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      mp4,
    ],
    { encoding: "utf8" },
  );
  if (ff.status !== 0) {
    console.error(ff.stderr);
    throw new Error("ffmpeg mp4 failed");
  }
  const gf = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      mp4,
      "-vf",
      "fps=8,scale=720:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",
      gif,
    ],
    { encoding: "utf8" },
  );
  if (gf.status !== 0) {
    console.error(gf.stderr);
    throw new Error("ffmpeg gif failed");
  }
  ok(mp4, 50_000);
  ok(gif, 50_000);
}

await browser.close();
console.log("capture complete");
