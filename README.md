# WEB103 Project 3 - Virtual Community Space

Submitted by: **Abdul Wakil Najibi**

About this web app: **Virtual Community Space allows users to browse and explore multiple event locations. Each location displays a hero image, interactive venue polygons, and event cards with details such as title, date, and countdown. The app demonstrates a full-stack connection between a React frontend, Express API, and PostgreSQL database while maintaining a modern, responsive design with Tailwind CSS.**

Time spent: **Approximately 20–30 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `locations` and `events` table**
  - [x] **Walkthrough includes a view of the Render dashboard demonstrating that the Postgres database is available**
  - [x] **Walkthrough includes a demonstration of table contents using `SELECT * FROM locations;` and `SELECT * FROM events;`**
- [x] **The web app displays a title and hero background**
- [x] **Website includes a visual interface with clickable locations (interactive polygons)**
- [x] **Each location has a detail page with a unique URL**
- [ ] **Clicking on a location navigates to its detail page and displays a list of all events associated with that location** (In progress — API routes verified, frontend fetch in progress)

---

The following **optional** features are implemented:

- [ ] An additional page shows all possible events
  - [ ] Users can sort _or_ filter events by location
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.)

---

The following **additional** features are implemented:

- [x] **Interactive hover effects on venue polygons and buttons**
- [x] **Modern, responsive layout using Tailwind CSS**
- [x] **Separation of concerns using modular components and services for locations and events**
- [x] **Hero background with gradient overlay for cinematic first impression**
- [x] **Consistent typography for readability and design coherence**
- [x] **Fully responsive card grid for events**
- [x] **Sleek, minimal UI with subtle shadows and hover effects**
- [x] **Default placeholder handling when event data is missing**

---

## Video Walkthrough

Here's a walkthrough of implemented features:

![App Demo](./docs/demo.gif)

GIF created with Kap for macOS (or ScreenToGif for Windows / Peek for Linux)

---

## Notes

Some challenges included:

- Debugging asynchronous fetch requests from the frontend to the Express API
- Ensuring dynamic event data correctly matches the selected location
- Maintaining style consistency while implementing Tailwind for hover and overlay effects
- Handling cases when the database returns no events for a location
- Achieving fully responsive polygon overlays and hero image scaling
- Balancing image visibility and overlay text readability

---

## License

Copyright 2025 Abdul Wakil Najibi

Licensed under the Apache License, Version 2.0 (the "License"); you may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
