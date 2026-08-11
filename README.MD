# Task Management App

A simple full-stack task management application built to help users organize and manage their personal tasks.

The app allows users to create an account, log in, create tasks, view their tasks, mark tasks as completed, and delete tasks. Each user can access only their own tasks.

## Features

* User signup and login
* Secure authentication using JWT
* Login session stored using an HTTP-only cookie
* Create new tasks
* View personal tasks
* Mark tasks as completed or incomplete
* Delete tasks
* Protected routes for logged-in users
* User-specific task access
* Form handling and validation on the frontend
* Toast messages for user feedback
* Clean separation of frontend and backend code

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Redux Toolkit
* Axios
* React Hook Form
* React Toastify

### Backend

* FastAPI
* Python
* PostgreSQL
* Pydantic
* PyJWT
* Argon2 password hashing
* Uvicorn

## How It Works

The application has two main parts:

### Frontend

The frontend is built with React and Vite.

It handles:

* Login and signup pages
* Creating tasks
* Displaying tasks
* Marking tasks as completed
* Deleting tasks
* Protected pages
* API requests
* Application state

Redux Toolkit is used to manage shared application state, while Axios is used to communicate with the backend API.

### Backend

The backend is built with FastAPI.

The backend handles:

* User registration
* User login
* Authentication
* User information
* Task creation
* Getting tasks
* Updating task completion status
* Deleting tasks

The backend code is separated into routers, services, repositories, and models. This keeps the code organized and makes it easier to work on different parts of the application.

## Authentication

The application uses JWT-based authentication.

When a user logs in:

1. The backend checks the login details.
2. A JWT access token is created.
3. The token is stored in an HTTP-only cookie.
4. Protected API routes check the token before allowing access.
5. The user's ID from the token is used to make sure the user can access only their own tasks.

Passwords are stored using Argon2 hashing instead of storing plain passwords.

## API Routes

### Authentication

| Method | Endpoint       | Description                          |
| ------ | -------------- | ------------------------------------ |
| POST   | `/auth/signup` | Create a new account                 |
| POST   | `/auth/login`  | Log in a user                        |
| GET    | `/auth/me`     | Get the logged-in user's information |
| POST   | `/auth/logout` | Log out the user                     |

### Tasks

| Method | Endpoint                        | Description                         |
| ------ | ------------------------------- | ----------------------------------- |
| POST   | `/tasks/create`                 | Create a task                       |
| GET    | `/tasks/get_tasks`              | Get all tasks of the logged-in user |
| PATCH  | `/tasks/updated_task/{task_id}` | Change task completion status       |
| DELETE | `/tasks/delete_task/{task_id}`  | Delete a task                       |

All task routes require an authenticated user.

## Project Structure

```text
task_management/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   │   ├── task_model.py
│   │   │   └── user_model.py
│   │   │
│   │   ├── repositories/
│   │   │   ├── task_repository.py
│   │   │   └── user_repository.py
│   │   │
│   │   ├── routers/
│   │   │   ├── task_router.py
│   │   │   └── user_router.py
│   │   │
│   │   ├── services/
│   │   │   ├── task_service.py
│   │   │   └── user_service.py
│   │   │
│   │   ├── auth.py
│   │   ├── config.py
│   │   ├── db.py
│   │   ├── dependencies.py
│   │   └── main.py
│   │
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── context/
    │   ├── features/
    │   ├── layouts/
    │   ├── pages/
    │   ├── redux/
    │   ├── router/
    │   ├── styles/
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js
```

## Database

PostgreSQL is used to store user and task data.

Each task is connected to the user who created it. This allows the backend to return only the tasks belonging to the logged-in user.

## Getting Started

### Prerequisites

Make sure you have these installed:

* Python
* Node.js
* PostgreSQL
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/nishantchaurasiya22/task_management.git

cd task_management
```

### 2. Backend Setup

Go to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Create your environment variables according to the configuration used by the backend.

Do not add your real database password or secret keys to GitHub.

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

### 3. Frontend Setup

Open another terminal and go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## What I Learned

While building this project, I worked on both frontend and backend development.

Some of the main things I practiced were:

* Building REST APIs with FastAPI
* Connecting FastAPI with PostgreSQL
* Working with JWT authentication
* Using HTTP-only cookies for authentication
* Password hashing
* Creating protected API routes
* Connecting React with a backend API
* Managing frontend state with Redux Toolkit
* Using Axios for API requests
* Handling forms with React Hook Form
* Organizing backend code into different layers
* Connecting users with their own tasks

## Future Improvements

Some features I would like to add in the future:

* Task priorities
* Due dates
* Task search and filtering
* Better task sorting
* More detailed dashboard
* Email notifications
* Improved mobile UI
* Deployment with a live frontend and backend

## Author

**Nishant Chaurasiya**

GitHub:
https://github.com/nishantchaurasiya22

## Repository

https://github.com/nishantchaurasiya22/task_management
