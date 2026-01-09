# 🧩 Issue Tracker System

The **Issue Tracker System** is an intermediate-level full-stack web application that simulates an internal issue/ticket tracking platform used by operations, IT support, and engineering teams.

This project focuses on **real-world backend architecture**, clean separation of concerns, and end-to-end communication between a frontend UI, RESTful APIs, and a relational database.

It is designed as a **portfolio-ready project** that demonstrates how production-style applications are structured beyond basic CRUD demos.

---

## 📌 Project Overview

In many organizations, internal tools are used to track bugs, incidents, and operational issues.  
This application replicates that workflow by allowing users to:

- Create issues (tickets)
- Assign priorities
- Track issue status across its lifecycle
- Persist data using a database
- Interact with the system through a simple dashboard UI

The backend follows an **MVC-style architecture** with dedicated routes, controllers, and models.

---

## 🚀 Features

- Create new issues with title, description, and priority
- View all existing issues in a dashboard
- Update issue status (Open → In Progress → Resolved)
- RESTful API built using Express.js
- SQLite database with schema initialization and seed data
- Clear separation of backend responsibilities
- Lightweight frontend built using vanilla JavaScript
- JSON-based client–server communication

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript (Fetch API)

### Backend
- Node.js
- Express.js

### Database
- SQLite

### Tooling
- npm
- Git & GitHub

---

## 🧱 Architecture & Design

The backend follows a modular structure inspired by MVC principles:

- **Routes**  
  Define API endpoints and map HTTP requests to controllers.

- **Controllers**  
  Contain business logic and handle request/response flow.

- **Models**  
  Handle database operations and SQL queries.

- **Config**  
  Centralized database connection logic.

This structure improves:
- Readability
- Maintainability
- Scalability
- Team collaboration

---

## 📂 Project Structure

