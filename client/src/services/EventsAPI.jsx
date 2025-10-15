const API_BASE_URL = "/api"; // Use Vite proxy

const EventsAPI = {
  // Fetch all events for a specific location
  async getEventsByLocation(locationId) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/events?locationId=${locationId}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch events for location ${locationId}: ${response.status}`
        );
      }
      return await response.json(); // Should return an array of events
    } catch (error) {
      console.error("Error fetching events by location:", error);
      return []; // Return empty array if something goes wrong
    }
  },

  // Fetch single event by ID (optional, used by Event.jsx if needed)
  async getEventById(eventId) {
    try {
      const response = await fetch(`${API_BASE_URL}/events/${eventId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch event ${eventId}: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching event by ID:", error);
      return null;
    }
  },
};

export default EventsAPI;

// const API_BASE_URL = "/api";

// const EventsAPI = {
//   async getAllEvents() {
//     const res = await fetch(`${API_BASE_URL}/events`);
//     if (!res.ok) throw new Error(`Failed to fetch events: ${res.status}`);
//     return res.json();
//   },

//   async getEventById(id) {
//     const res = await fetch(`${API_BASE_URL}/events/${id}`);
//     if (!res.ok) throw new Error(`Failed to fetch event ${id}: ${res.status}`);
//     return res.json();
//   },

//   async getEventsByLocation(locationId) {
//     const res = await fetch(`${API_BASE_URL}/events/location/${locationId}`);
//     if (!res.ok)
//       throw new Error(
//         `Failed to fetch events by location ${locationId}: ${res.status}`
//       );
//     return res.json();
//   },
// };

// export default EventsAPI;

// // client/src/services/EventsAPI.jsx
// const API_BASE_URL = "/api";
// // import.meta.env.VITE_API_URL || "http://localhost:3002/api";

// const EventsAPI = {
//   async getAllEvents() {
//     try {
//       const response = await fetch(`${API_BASE_URL}/events`);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch events: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching all events:", error);
//       throw error;
//     }
//   },

//   async getEventsByLocationId(locationId) {
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}/events/location/${locationId}`
//       );
//       if (!response.ok) {
//         throw new Error(
//           `Failed to fetch events for location ${locationId}: ${response.status}`
//         );
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching events by location:", error);
//       throw error;
//     }
//   },

//   async getEventById(id) {
//     try {
//       const response = await fetch(`${API_BASE_URL}/events/${id}`);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch event ${id}: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching event by ID:", error);
//       throw error;
//     }
//   },
// };

// export default EventsAPI;

// // src/services/EventsAPI.js
// // Wrapper around fetch for events endpoints

// const base = "/api/events";

// async function handleResponse(res) {
//   if (!res.ok) {
//     const errText = await res.text();
//     throw new Error(errText || "Network response was not ok");
//   }
//   return res.json();
// }

// async function getAllEvents() {
//   const res = await fetch(`${base}`);
//   return handleResponse(res);
// }

// async function getEventsById(eventId) {
//   const res = await fetch(`${base}/${eventId}`);
//   return handleResponse(res);
// }

// // get events for a specific location id
// async function getEventsByLocation(locationId) {
//   // Endpoint implemented on server: GET /api/events/location/:locationId
//   // If you implemented /api/events?locationId=... you can adapt this.
//   const res = await fetch(`${base}/location/${locationId}`);
//   return handleResponse(res);
// }

// export default {
//   getAllEvents,
//   getEventsById,
//   getEventsByLocation,
// };
