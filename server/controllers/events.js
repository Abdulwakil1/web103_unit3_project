// server/controllers/events.js
import { pool } from "../config/database.js";

/**
 * Get all events
 * GET /api/events
 */
const getEvents = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    console.error("getEvents error:", error);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get events by location id
 * GET /api/events/location/:locationId
 */
const getEventsByLocationId = async (req, res) => {
  const { locationId } = req.params;
  try {
    const results = await pool.query(
      "SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC, time ASC",
      [locationId]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    console.error("getEventsByLocationId error:", error);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get single event by id
 * GET /api/events/:id
 */
const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await pool.query("SELECT * FROM events WHERE id = $1", [
      id,
    ]);

    if (results.rows.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error("getEventById error:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export as default object so `import EventsController from ".../events.js"` works
export default {
  getEvents,
  getEventsByLocationId,
  getEventById,
};
