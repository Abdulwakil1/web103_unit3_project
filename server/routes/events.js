import express from "express";
import EventsController from "../controllers/events.js";

const router = express.Router();

router.get("/", EventsController.getEvents);
router.get("/location/:locationId", EventsController.getEventsByLocationId);
router.get("/:id", EventsController.getEventById);

export default router;
