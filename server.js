const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// Serve the React app's static files from the 'client/dist' folder
app.use(express.static(path.join(__dirname, "client", "dist")));

// Serve additional static files from 'public/images' folder at the '/images' route
app.use("/images", express.static(path.join(__dirname, "public", "images")));

// Catch-all route to serve React app for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
