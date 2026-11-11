
# Cynbit Smart Project Inquiry System

An enhanced project inquiry website built to improve the project enquiry experience by collecting structured project requirements from potential clients.

## Live Demo

- **Frontend:** https://cynbit-smart-inquiry-system.vercel.app/
- **Backend:** https://cynbit-smart-inquiry-system.onrender.com/

## Features

- Responsive website design
- Project type and industry selection
- Project description
- Budget and timeline selection
- Contact information form
- Frontend and backend email validation
- MongoDB database integration
- Inquiry submission confirmation
- Loading and error handling

## Technologies Used

- React.js
- JavaScript
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CSS

## Project Structure

```text
cynbit-smart-inquiry-system/
├── client/
│   └── React frontend
├── server/
│   ├── models/
│   │   └── Inquiry.js
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/palak-jain123/cynbit-smart-inquiry-system.git
cd cynbit-smart-inquiry-system
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Configure backend environment variables

Create a `.env` file inside the `server` folder:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the backend

```bash
node server.js
```

The backend will run on `http://localhost:5000`.

### 5. Install frontend dependencies

Open another terminal:

```bash
cd cynbit-smart-inquiry-system/client
npm install
```

### 6. Configure frontend environment variables

Create a `.env` file inside the `client` folder:

```env
VITE_API_URL=http://localhost:5000
```

### 7. Run the frontend

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Deployment

- Frontend deployed using Vercel.
- Backend deployed using Render.
- MongoDB Atlas used for database hosting.

## Note

This project is an independent enhancement prototype inspired by the Cynbit Contact page. It demonstrates an improved project inquiry experience and is not a modification of Cynbit's production website.

## Note
This project is an independent enhancement prototype inspired by the Cynbit Contact page.
