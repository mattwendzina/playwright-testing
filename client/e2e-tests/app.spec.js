// tests/app.spec.js
import { test, expect } from "@playwright/test";

test("home page has correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Vite + React"); // Change to match your app's title
});

test("navigation works correctly", async ({ page }) => {
  await page.goto("/");

  // Check Home page
  await expect(page.locator("h1")).toContainText("Welcome to the Home Page!");
  await page.pause();
  // Go to About page
  await page.click("text=About");
  await expect(page.locator("h1")).toContainText("This is the About Page.");

  // Go to Contact page
  await page.click("text=Contact");
  await expect(page.locator("h1")).toContainText("This is the Contact Page.");
});
