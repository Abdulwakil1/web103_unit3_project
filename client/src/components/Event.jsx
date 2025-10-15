import React, { useState, useEffect } from "react";
// import "../css/Event.css"  //  no longer needed once switched  to Tailwind
// import dates from "../utils/dates";

const Event = (props) => {
  const [event, setEvent] = useState({});
  const [time, setTime] = useState("");
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const eventData = await EventsAPI.getEventsById(props.id);
        setEvent(eventData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const result = await dates.formatTime(event.time);
        setTime(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [event]);

  useEffect(() => {
    (async () => {
      try {
        const timeRemaining = await dates.formatRemainingTime(event.remaining);
        setRemaining(timeRemaining);
        dates.formatNegativeTimeRemaining(remaining, event.id);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [event]);

  return (
    <article className="relative w-[350px] h-[350px] m-5 rounded-xl overflow-hidden border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer">
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover brightness-90 transition-all duration-500 group-hover:brightness-50"
      />

      {/* Overlay — slides in on hover */}
      <div className="absolute inset-0 bg-[var(--primary)]/80 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h3 className="text-2xl font-extrabold mb-2 drop-shadow-lg uppercase">
            {event.title}
          </h3>
          <p className="text-sm mb-2 flex justify-center items-center gap-2">
            <i className="fa-regular fa-calendar fa-bounce"></i>
            {event.date} <br /> {time}
          </p>
          <p
            id={`remaining-${event.id}`}
            className={`mt-2 font-semibold text-sm ${
              remaining.includes("-")
                ? "bg-red-600 text-white px-3 py-1 rounded"
                : "text-white/90"
            }`}
          >
            {remaining}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Event;

// import React, { useState, useEffect } from "react";
// import "../css/Event.css";

// const Event = (props) => {
//   const [event, setEvent] = useState([]);
//   const [time, setTime] = useState([]);
//   const [remaining, setRemaining] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const eventData = await EventsAPI.getEventsById(props.id);
//         setEvent(eventData);
//       } catch (error) {
//         throw error;
//       }
//     })();
//   }, []);

//   useEffect(() => {
//     (async () => {
//       try {
//         const result = await dates.formatTime(event.time);
//         setTime(result);
//       } catch (error) {
//         throw error;
//       }
//     })();
//   }, [event]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const timeRemaining = await dates.formatRemainingTime(event.remaining);
//         setRemaining(timeRemaining);
//         dates.formatNegativeTimeRemaining(remaining, event.id);
//       } catch (error) {
//         throw error;
//       }
//     })();
//   }, [event]);

//   return (
//     <article className="event-information">
//       <img src={event.image} />

//       <div className="event-information-overlay">
//         <div className="text">
//           <h3>{event.title}</h3>
//           <p>
//             <i className="fa-regular fa-calendar fa-bounce"></i> {event.date}{" "}
//             <br /> {time}
//           </p>
//           <p id={`remaining-${event.id}`}>{remaining}</p>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default Event;
