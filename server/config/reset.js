// Load environment variables (optional but explicit)
import "../config/dotenv.js";

import { pool } from "./database.js";
import locationsData from "../data/locations.js";
import eventsData from "../data/events.js";

// --------------------------------------------------
// Create Locations & Events Tables
// --------------------------------------------------
const createTables = async () => {
  try {
    const createTablesQuery = `
      -- Drop existing tables in correct dependency order
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS locations;

      -- Create Locations table first
      CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255),
        city VARCHAR(100),
        state VARCHAR(50),
        zip VARCHAR(20),
        image VARCHAR(255)
      );

      -- Create Events table referencing Locations
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        time TIME,
        remaining INTERVAL,
        location_id INT REFERENCES locations(id) ON DELETE CASCADE,
        image VARCHAR(255)
      );
    `;

    await pool.query(createTablesQuery);
    console.log("✅ Tables created successfully.");
  } catch (err) {
    console.error("❌ Error creating tables:", err);
    throw err;
  }
};

// --------------------------------------------------
// Seed Locations Table
// --------------------------------------------------
const seedLocations = async () => {
  try {
    for (const loc of locationsData) {
      const insertQuery = `
        INSERT INTO locations (id, name, address, city, state, zip, image)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO NOTHING;
      `;
      const values = [
        loc.id,
        loc.name,
        loc.address,
        loc.city,
        loc.state,
        loc.zip,
        loc.image,
      ];
      await pool.query(insertQuery, values);
      console.log(`🏙️  Added location: ${loc.name}`);
    }
  } catch (err) {
    console.error("❌ Error seeding locations:", err);
    throw err;
  }
};

// --------------------------------------------------
// Seed Events Table
// --------------------------------------------------
const seedEvents = async () => {
  try {
    for (const event of eventsData) {
      const insertQuery = `
        INSERT INTO events (id, title, date, time, remaining, location_id, image)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO NOTHING;
      `;
      const values = [
        event.id,
        event.title,
        event.date,
        event.time,
        event.remaining,
        event.location_id,
        event.image,
      ];
      await pool.query(insertQuery, values);
      console.log(`🎟️  Added event: ${event.title}`);
    }
  } catch (err) {
    console.error("❌ Error seeding events:", err);
    throw err;
  }
};

// --------------------------------------------------
// Reset Function
// --------------------------------------------------
const resetDatabase = async () => {
  try {
    await createTables();
    await seedLocations();
    await seedEvents();
    console.log("🎉 Database reset and seeded successfully!");
  } catch (err) {
    console.error("❌ Database reset failed:", err);
  } finally {
    pool.end(); // Close DB connection
  }
};

// Run it
resetDatabase();
