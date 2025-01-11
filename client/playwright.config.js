// playwright.config.js
export default {
  use: {
    baseURL: "http://localhost:5173", // Change to your app's URL
    headless: true, // Run tests in headless mode (without browser UI)
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
};
