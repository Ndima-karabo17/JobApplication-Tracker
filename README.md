# Job Application Tracker

A simple and responsive Job Application Tracker built with React and TypeScript.
Users can register, log in, and manage jobs they have applied for.
All data is saved in the browser's localStorage — no backend required.

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Routing](#routing)
- [Visuals](#visuals)
- [Roadmap](#roadmap)
- [Project Status](#project-status)

---

## Description

The Job Application Tracker is a frontend React and TypeScript application that helps users keep track of jobs they have applied for. Users can register an account, log in, and manage a personal list of job applications — including job title, company name, address, contact details, duties, requirements, and application status. All data persists in the browser's localStorage so nothing is lost on page refresh.

---

## Features

### Authentication
- Register a new account with a username and password
- Username must be at least 5 characters
- Password must be at least 8 characters
- Login with registered credentials
- Redirects to the Job Page after successful login

### Job Management
- Add new job applications with full details:
  - Job title
  - Company name
  - Address
  - Contact email and phone
  - Date applied
  - Job duties
  - Requirements
  - Company information
  - Application status (Applied, Interviewed, Rejected)
- Edit any existing job application
- Delete a job with a confirmation prompt

### Data Persistence
- All job data and user credentials are stored in localStorage
- No backend or database required
- Data persists across page refreshes

### Responsive UI
- Card-based layout for job listings
- Responsive design with media queries for mobile, tablet, and desktop
- 404 page for unknown routes

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [React](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [React Router DOM](https://reactrouter.com/) | Client-side routing |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling and layout |
| [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Persistent data storage |

---

## Requirements

Before installing, make sure you have the following:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

---

## Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd job-application-tracker

# 2. Install dependencies
npm install

# 3. Install React Router DOM
npm install react-router-dom
npm install --save-dev @types/react-router-dom

# 4. Start the development server
npm run dev
```

---

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Register a new account on the Sign Up page
3. Log in with your credentials — you will be redirected to the Job Page
4. Add a new job application by filling in the form and clicking Save
5. View all your applications on the Home page
6. Edit or delete any job using the buttons on each card

---

## Routing

Client-side routing is handled by React Router:

| Path | Page | Description |
|------|------|-------------|
| `/` | Landing Page | Introduction and calls to action |
| `/Registration` | Register | Create a new account |
| `/Login` | Login | Sign in to your account |
| `/Home` | Home | View all job applications |
| `/JobPage` | Job Page | Add or edit a job application |
| `*` | 404 | Page not found |

---

## Visuals

### Flow of Web Pages

<img width="800" height="900" alt="Screenshot 2025-09-19 142834" src="https://github.com/user-attachments/assets/3ade69c2-1922-4b88-abb6-66b83833fc96" />
<img width="800" height="900" alt="Screenshot 2025-09-19 143458" src="https://github.com/user-attachments/assets/c4ba54d6-a05b-45d0-9127-35d7336e9abb" />
<img width="800" height="900" alt="Screenshot 2025-09-19 143705" src="https://github.com/user-attachments/assets/9481fa03-cfeb-4d35-8657-5af3c30d78fb" />
<img width="800" height="900" alt="Screenshot 2025-09-19 142201" src="https://github.com/user-attachments/assets/c8d99025-edf2-430c-a7a1-1ca361ce628a" />
<img width="800" height="900" alt="Screenshot 2025-09-23 081741" src="https://github.com/user-attachments/assets/34d5dcf0-6e37-4027-88a0-3e5a9e7523ce" />
<img width="800" height="900" alt="Screenshot 2025-09-23 081852" src="https://github.com/user-attachments/assets/33964d63-5b99-411d-98b9-631fafc7b00c" />
<img width="800" height="900" alt="Screenshot 2025-09-19 152643" src="https://github.com/user-attachments/assets/fe5d0088-4c56-435c-89d2-581e3de22995" />

---

## Roadmap

- [ ] Connect to a real backend API (Node.js + PostgreSQL)
- [ ] Add JWT-based authentication
- [ ] Filter and search job applications by status or company
- [ ] Add email or phone validation on the job form
- [ ] Export job applications to CSV
- [ ] Dark mode support

---

## Project Status

This project is currently in active development. Core features including registration, login, and full job application management are functional. Backend integration and advanced filtering are planned for future updates.
