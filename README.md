ask Management Application

A simple full-stack task management app built as part of a Full Stack Development Internship assignment.

Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Database: MongoDB

Setup Instructions
Backend
cd backend
npm install

Create a .env file inside backend/:

MONGO_URI=mongodb://127.0.0.1:27017/taskmanager

Start the server:

npm start

Backend runs on:

http://localhost:5000

Frontend
cd frontend

Open index.html in a browser.

API Routes

POST /api/tasks

GET /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

Notes

MongoDB must be running locally

Environment variables are not committed
