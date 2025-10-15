import express from "express";
import LocationsController from "../controllers/locations.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Get all locations
router.get("/", LocationsController.getLocations);

// Get a single location by ID
router.get("/:locationId", LocationsController.getLocationById);

// Serve location detail HTML page (if needed for a frontend route)
router.get("/:locationId/page", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/location.html"));
});
