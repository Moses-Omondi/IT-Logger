const express = require("express");
const path = require("path");

const app = express();
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("it-logger/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "it-logger", "build", "index.html"))
  );
}
