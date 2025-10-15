import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import EventsAPI from "../services/EventsAPI";
import LocationsAPI from "../services/LocationsAPI";
import "../css/LocationEvents.css";

const LocationEvents = () => {
  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);

  // Get location name from URL (e.g. /echolounge)
  const locationPath = window.location.pathname.replace("/", "").toLowerCase();

  useEffect(() => {
    (async () => {
      try {
        // Fetch all locations first
        const allLocations = await LocationsAPI.getAllLocations();
        const foundLocation = allLocations.find(
          (loc) => loc.slug.toLowerCase() === locationPath
        );

        if (foundLocation) {
          setLocation(foundLocation);

          // Fetch events for this location
          const locationEvents = await EventsAPI.getEventsByLocation(
            foundLocation.id
          );
          setEvents(locationEvents);
        }
      } catch (error) {
        console.error("Error fetching location/events:", error);
      }
    })();
  }, [locationPath]);

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} alt={location.name || "location"} />
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>
            {location.address}, {location.city}, {location.state} {location.zip}
          </p>
        </div>
      </header>

      <main>
        {events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i> No events
            scheduled at this location yet!
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;

// import React, { useState, useEffect } from 'react'
// import Event from '../components/Event'
// import '../css/LocationEvents.css'

// const LocationEvents = ({index}) => {
//     const [location, setLocation] = useState([])
//     const [events, setEvents] = useState([])

//     return (
//         <div className='location-events'>
//             <header>
//                 <div className='location-image'>
//                     <img src={location.image} />
//                 </div>

//                 <div className='location-info'>
//                     <h2>{location.name}</h2>
//                     <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
//                 </div>
//             </header>

//             <main>
//                 {
//                     events && events.length > 0 ? events.map((event, index) =>
//                         <Event
//                             key={event.id}
//                             id={event.id}
//                             title={event.title}
//                             date={event.date}
//                             time={event.time}
//                             image={event.image}
//                         />
//                     ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
//                 }
//             </main>
//         </div>
//     )
// }

// export default LocationEvents
