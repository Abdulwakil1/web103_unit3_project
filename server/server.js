import express from "express";
import path from "path";
import favicon from "serve-favicon";
import dotenv from "dotenv";

// Import routers
import eventsRouter from "./routes/events.js";
import locationsRouter from "./routes/locations.js";

dotenv.config();

const PORT = process.env.PORT || 3002;
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Serve favicon depending on environment
if (process.env.NODE_ENV === "development") {
  app.use(favicon(path.resolve("../", "client", "public", "party.png")));
} else if (process.env.NODE_ENV === "production") {
  app.use(favicon(path.resolve("public", "party.png")));
  app.use(express.static("public"));
}

// Mount API routes
app.use("/api/events", eventsRouter);
app.use("/api/locations", locationsRouter);

// Optional: Root route for a simple message
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1 style='text-align:center; margin-top:50px;'>Virtual Community Space API</h1>"
    );
});

// Optional: Handle frontend routing in production
if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => res.sendFile(path.resolve("public", "index.html")));
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
