Job Listing Web Application

A full-stack job listing web application built as part of a technical assignment.
The application allows users to browse job listings, search jobs by location, and view detailed job information in a two-panel layout.

The backend efficiently handles large datasets using server-side filtering and pagination to ensure good performance and scalability.

🧩 Features
Frontend

Two-panel desktop layout:

Left panel: List of job postings

Right panel: Selected job details

Location-based job search

Debounced search input to avoid unnecessary API calls

“Find jobs” button for explicit search

Scroll-based pagination for loading more jobs

Clean, minimal UI built with Tailwind CSS

Backend

REST API built with Express.js

MongoDB database with Mongoose

Jobs loaded from provided JSON data

Server-side filtering by location

Server-side pagination using page and limit

Indexed fields for better query performance

🛠 Tech Stack
Frontend

- React.js (Vite)

- Tailwind CSS

- Axios

Backend
- 
- Node.js
- 
- Express.js
- 
- MongoDB
- 
- Mongoose

📁 Project Structure

root/
│
├── client/        # Frontend (React + Tailwind)
│   ├── src/
│   ├── .env
│   └── package.json
│
├── server/        # Backend (Node + Express)
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── database/
│   ├── .env
│   └── package.json
│
└── README.md

⚙️ Environment Variables

Backend (server/.env)
PORT=8000
MONGO_URL=your_mongodb_connection_string

Frontend (client/.env)
VITE_BACKEND_URL=http://localhost:8000


▶️ Running the Project Locally

1️⃣ Clone the repository
git clone https://github.com/thedhirajshah13/Job_Search.git
cd Job_Search

2️⃣ Start Backend
cd server
npm install
npm start

Backend runs on:
http://localhost:8000

3️⃣ Start Frontend
cd client
npm install
npm run dev

Frontend runs on:
http://localhost:5173 (or next available port)


🔗 API Endpoints
Fetch jobs (with optional filters)
GET /api/jobs

Query Parameters

Parameter	Description
location	Filter jobs by location
page	    Page number (default: 1)
limit	    Number of jobs per page (default: 20)
Example
GET /api/jobs?location=Delhi&page=1&limit=20


🚀 Performance & Scalability
- Server-side pagination prevents loading large datasets at once
- MongoDB indexes used on searchable fields
- Debounced input reduces excessive API calls
- Scroll-based loading improves UX without overwhelming the browser

📝 Assumptions & Decisions
- Desktop-first UI was implemented as mobile responsiveness was not required by the task
- Backend filtering was preferred over frontend filtering for scalability
- Infinite scrolling was avoided in favor of controlled scroll-based pagination
- UI was kept simple to focus on functionality and data flow


📌 Possible Improvements
- Mobile responsiveness
- Advanced filters (experience, company, employment type)
- Authentication and saved jobs
- Infinite scroll with virtualization
- Caching for frequently searched locations

✅ Status
- Backend:  Completed
- Frontend: CompletedPerformance 
- handling: ImplementedTask 
- requirements: Fully met

👤 Author
Dhiraj Shah
Full-Stack Developer