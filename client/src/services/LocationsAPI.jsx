// client/src/services/LocationsAPI.jsx
const API_BASE_URL = "/api";
//   import.meta.env.VITE_API_URL || "http://localhost:3002/api";

const LocationsAPI = {
  async getAllLocations() {
    try {
      const response = await fetch(`${API_BASE_URL}/locations`);
      if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching locations:", error);
      throw error;
    }
  },

  async getLocationById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/locations/${id}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch location with ID ${id}: ${response.status}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching location by ID:", error);
      throw error;
    }
  },
};

export default LocationsAPI;

// // src/services/LocationsAPI.js
// // Simple wrapper around fetch for locations endpoints

// const base = "/api/locations"; // relative - will use Vite proxy in development

// async function handleResponse(res) {
//   if (!res.ok) {
//     const errText = await res.text();
//     throw new Error(errText || "Network response was not ok");
//   }
//   return res.json();
// }

// async function getAllLocations() {
//   const res = await fetch(`${base}`);
//   return handleResponse(res);
// }

// async function getLocationById(locationId) {
//   const res = await fetch(`${base}/${locationId}`);
//   return handleResponse(res);
// }

// export default {
//   getAllLocations,
//   getLocationById,
// };
