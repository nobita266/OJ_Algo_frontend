Sure, here's the README with a cleaner format:

````markdown
# Online Judge System (MERN)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
````

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

Explore the following resources to learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Overview

The MERN Online Judge System is a web application designed to facilitate users in solving coding problems in different programming languages. The system is built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js.

## Features

1. **User Authentication:**

   - Users can register and securely log in to the platform.
   - Two user types: administrator and normal users.
   - Implements JWT Token for security.

2. **Add Problems:**

   - Admins can create coding problems with problem statements, input/output specifications, time limits, and constraints.
   - Includes a suggestion box where users can provide feedback for problems.

3. **Test Cases:**

   - Admins can define multiple test cases for each problem.

4. **Leaderboard:**

   - Shows top performers.

5. **User Profile:**
   - Users have a profile page displaying their submission history and achievements.

## Architecture

The MERN stack is used for building the Online Judge System:

- **MongoDB:**
  - Stores user data, problem statements, submissions, and other relevant information.
- **Express.js:**
  - Serves as the backend framework, handling API requests, authentication, and communication with the database.
- **React:**
  - Provides a dynamic and interactive user interface for problem-solving, submissions, and discussions.
- **Node.js:**
  - Runs the server-side code and handles server-side logic.

## Frontend (UI)

### Login

- Input fields for email and password.
- Links for forgot password and signup screens.
- Login button.

### Signup

- Input fields for first name, last name, email, password, and confirm password.
- Link for the login screen.
- Signup button to register the user.

### Homepage

- Navigation bar with profile icon (redirects to login/signup if not logged in, else to the profile page) and the online judge logo.
- Buttons for all data structure names.
- Sorting options for questions.
- List of questions with pagination.

### Problem Page

- Divided into two vertical halves.
- Problem name, statement, constraints, and sample test cases with explanations.
- Online compiler with language selection.
- Buttons for run and submit.

### Submission Page

- Displays submission details including errors encountered and complete code.
- Includes an appreciation sentence for successfully solving the problem.

### Profile

- Shows achievements, number of questions solved, and a list of solved questions with ranks.

## Backend

The backend of this project is built using Node.js with Alpine 18 version. It uses Express.js as the server framework for handling API requests, authentication, and communication with the database.

### Installation

- Install g++, Python, and JDK for compiling code in different languages.
- Use child processes for executing code.
- Connect with API endpoints using Axios or Fetch.

### Express Server and CORS Error

The Express server handles API requests from the frontend. To prevent CORS (Cross-Origin Resource Sharing) errors, the server can be configured to allow requests from specified origins using the `cors` middleware.

## Database

### User

- id
- firstname
- lastname
- email
- password
- isAdmin

### Problem

- problem no.
- problem name
- problem statement
- problem difficulty
- input/output
- constraints
- code

### Testcase

- Testcase number
- Input/output

### SolvedProblem

- problemId
- code
- language

```

```
