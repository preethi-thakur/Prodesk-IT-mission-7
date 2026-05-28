# Multi-Step Form Application

## Overview

This project is a responsive Multi-Step Form application built using React.js. It allows users to enter data step-by-step with proper validation and smooth navigation between form sections.

The application focuses on providing a clean user experience, reusable components, and efficient form handling.

---

## Features

* Multi-step form navigation
* Form validation using React Hook Form and Zod
* Password strength validation
* Confirm password matching
* Reusable input components
* Error handling and validation messages
* Smooth user experience with step indicators
* Modern and clean interface

---

## Tech Stack

* React.js
* React Hook Form
* Zod Validation
* JavaScript
* Tailwind CSS
* Vite

---

## Project Structure

```bash
src/
 ├── components/
 │    ├── InputField.jsx
 │    ├── PasswordInput.jsx
 │    ├── StepHeader.jsx
 │    └── SuccessModal.jsx
 │
 ├── pages/
 │    ├── StepAccount.jsx
 │    ├── StepPersonal.jsx
 │    └── StepReview.jsx
 │
 ├── schemas/
 │    └── registrationSchemas.js
 │
 ├── styles/
 │    └── index.css
 │
 ├── utils/
 │    └── steps.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## Installation

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Validation Features

The form includes:

* Required field validation
* Email format validation
* Password strength checking
* Confirm password matching
* Real-time error messages

---

## Learning Outcomes

Through this project, the following concepts were practiced:

* Form handling in React
* Schema-based validation using Zod
* State management across multiple steps
* Reusable component creation
* Responsive UI development
* User-friendly form design

---

## Future Improvements

* Add backend integration
* Store form data in database
* Add animations between steps
* Add dark mode support
* Add progress saving functionality

---

## Author

Developed by Preethi Thakur.
