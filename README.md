# 🚀 Page Pulse

Page Pulse is a full-stack web application that analyzes any public website and returns useful SEO and performance information.

## Features

- HTTP Status Code
- Response Time
- Page Title
- Meta Description
- H1 Count
- Missing Alt Images
- Word Count
- URL Validation
- Error Handling

---

# Tech Stack

Frontend

- React
- Axios
- CSS

Backend

- Node.js
- Express.js
- Axios
- Cheerio

---

# Project Structure

```
page-pulse/
│
├── frontend/
├── backend/
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/palakthakur341/Page-pulse.git
```

Go to frontend

```bash
cd frontend
npm install
npm run dev
```

Go to backend

```bash
cd backend
npm install
npm run dev
```

---

# API Contract

## POST

```
POST /api/analyze
```

### Request Body

```json
{
  "url": "https://example.com"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "status": 200,
    "responseTime": 320,
    "title": "Example Domain",
    "metaDescription": "...",
    "h1Count": 1,
    "missingAlt": 0,
    "wordCount": 17
  }
}
```

### Error Response

```json
{
  "success": false,
  "message": "URL is required"
}
```

---

# Design Decisions

### 1. Express + React

The project is separated into frontend and backend to keep the UI independent from the analysis logic.

---

### 2. Cheerio for HTML Parsing

Cheerio provides fast server-side HTML parsing with a jQuery-like API, making it efficient to extract titles, headings, images, and metadata.

---

### 3. Input Validation

URL validation is performed before making external requests to avoid unnecessary API calls and provide meaningful error messages to users.

---

# Running Tests

```bash
npm test
```

Current Tests

- Analyze valid website
- Missing URL
- Invalid URL

---

# Live Demo

Frontend-https://page-pulse-666q.onrender.com

Backend-https://page-pulse-backend-618k.onrender.com

---
#AI Usage

During the development of this project, I used AI tools to assist with understanding the assignment requirements, clarifying implementation approaches, debugging errors, and improving the README and project documentation. The application architecture, implementation, testing, debugging, deployment, and final decisions were completed and verified by me.

Built for the Digital Heroes Internship Qualification Task.
