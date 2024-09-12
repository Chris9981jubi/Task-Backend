Task Scheduler Project
Overview
This project is a task scheduler application built using Node.js, Express, and MongoDB for the backend, with React for the frontend. The application allows users to add tasks and view a list of tasks.

Backend API Endpoints
1. Fetch Tasks
Endpoint: GET /api/tasks
Description: Retrieves a list of all tasks from the database.
Response:
Status Code: 200 OK
Content-Type: application/json

2. Add Task
Endpoint: POST /api/tasks
Description: Adds a new task to the database.
Request Body:
Content-Type: application/json

Response:
Status Code: 201 Created
Content-Type: application/json
{
  "_id": "new-task-id",
  "name": "Task Name",
  "description": "Task Description",
  "dueDate": "2024-09-15"
}
