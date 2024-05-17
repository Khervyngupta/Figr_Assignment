# Identity Design System Web Application

## Description

This project is a full-stack web application for managing design systems using the Identity Design System generator. It allows users to create accounts, create and manage projects, define custom styles, and preview components in a Storybook playground.

## Features

- User authentication: Register, login, and logout functionality.
- Project management: Create, update, and delete projects.
- Style customization: Define custom styles such as colors, radius, and spacing for components.
- Component styling: Customize styles for HTML components like buttons, inputs, and selects.
- Storybook playground: Preview components with different styles and properties.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd identity-design-system-webapp

## Install dependencies

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Set up environment variables

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

- Replace your_mongodb_connection_string with your MongoDB connection string and your_jwt_secret with a secure JWT secret key.

# Run the application

# Start the backend server
cd ../backend
npm start

# Start the frontend server
cd ../frontend
npm start

# Access the application at http://localhost:3000.

# Technologies Used

- Frontend:
    - React.js
    - React Router
    - Axios

- Backend:
    - Node.js
    - Express
    - MongoDB
    - JSON Web Tokens (JWT) for authentication
