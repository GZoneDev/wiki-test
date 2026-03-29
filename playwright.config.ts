import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["list"],
    ["html", { open: "never" }],
    ["json", { outputFile: "reports/test-results.json" }],
  ],

  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    headless: process.env.CI ? true : false,
  },

  projects: [
    {
      name: "setup",
      testMatch: "**/*.setup.ts",
    },

    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "auth/user.json",
      },
      dependencies: ["setup"],
    },
  ],
});
