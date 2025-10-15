// src/utils/dates.js

const dates = {
  // Format time string (HH:mm or a Date object) to a friendly format
  async formatTime(time) {
    try {
      if (!time) return "";
      const dateObj = new Date(time);
      // Options: 12-hour format with hours and minutes
      const options = { hour: "2-digit", minute: "2-digit", hour12: true };
      return dateObj.toLocaleTimeString([], options);
    } catch (error) {
      console.error("Error formatting time:", error);
      return time;
    }
  },

  // Format remaining time in a friendly string (e.g., "2 days left")
  async formatRemainingTime(remaining) {
    try {
      if (typeof remaining === "number") {
        if (remaining < 0) return `-${Math.abs(remaining)} ms`;
        return `${remaining} ms`;
      }
      // If remaining is a date string, compute difference
      const now = new Date();
      const target = new Date(remaining);
      const diffMs = target - now;

      if (diffMs <= 0) return "- Event passed";

      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);

      let result = "";
      if (diffDays) result += `${diffDays}d `;
      if (diffHours) result += `${diffHours}h `;
      if (diffMinutes) result += `${diffMinutes}m`;

      return result.trim() || "<1m";
    } catch (error) {
      console.error("Error formatting remaining time:", error);
      return remaining;
    }
  },

  // Optional: mark negative remaining time (for styling in Event.jsx)
  formatNegativeTimeRemaining(remaining) {
    // This could be used to manipulate DOM or return a flag
    // For now, it's just a placeholder, since Event.jsx handles styling
    return remaining.includes("-") ? "negative" : "positive";
  },
};

export default dates;
