# Wayfair Clone

Welcome to the **Wayfair Clone**! This project replicates the popular e-commerce platform Wayfair, showcasing various home products and functionalities like authentication, cart management, and product filtering. It is built with a modern tech stack including React, Redux, Chakra UI, Vite, and Node.js.

## Live Demo
You can view the deployed project here:
👉 [Wayfair Clone](https://wayfair-clone-dusky.vercel.app/)

---

## Features

- **Frontend**:
  - Fully responsive design with Chakra UI.
  - User authentication (Signup/Login).
  - Product listing by category.
  - Product sorting and filtering (e.g., price, ratings).
  - Add-to-cart functionality.
  - Single product pages with detailed information.
  - Carousel/Slider on the homepage.

- **Backend**:
  - RESTful APIs built with Express.js.
  - MongoDB database for storing user and product data.
  - Secure user authentication with JWT.
  - Product data fetching and filtering.

---

## Tech Stack

### Frontend
- **React.js**: For building a dynamic and interactive user interface.
- **Redux**: For managing global application state.
- **Chakra UI**: For responsive and accessible UI components.
- **Vite**: For fast development and build setup.
- **React Router**: For handling navigation.

### Backend
- **Node.js**: For the server-side environment.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For database management.
- **Mongoose**: For schema and database modeling.
- **JWT (JSON Web Token)**: For user authentication.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (>=16.x)
- npm (comes with Node.js)
- MongoDB (either local or a cloud service like MongoDB Atlas)

### Cloning the Repository
```bash
git clone https://github.com/<your-username>/wayfair-clone.git
cd wayfair-clone
```

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and configure the following:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The backend server will be running at `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be running at `http://localhost:5173`.

---

## Folder Structure

```
wayfair-clone/
│
├── backend/
│   ├── controllers/       # API logic for users, products, etc.
│   ├── models/            # Mongoose models for database schemas
│   ├── routes/            # Express routes
│   ├── server.js          # Main server file
│   └── .env               # Environment variables (not committed)
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components (Header, Footer, etc.)
│   │   ├── pages/         # Pages like Home, Product, Cart, etc.
│   │   ├── redux/         # Redux store, slices, and actions
│   │   ├── App.jsx        # Main application file
│   │   └── main.jsx       # Entry point
│   └── vite.config.js     # Vite configuration
│
├── README.md              # Project documentation
└── package.json           # Dependencies and scripts
```

---

## API Endpoints

### Users
- `POST /api/users/signup`: Register a new user.
- `POST /api/users/login`: Log in a user and generate a token.

### Products
- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a specific product by ID.
- `GET /api/products?category=<category>`: Filter products by category.

---

## Deployment

### Frontend Deployment (Vercel)
1. Push your frontend code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/), connect your GitHub repository, and deploy the frontend.
3. Ensure the API URL points to your deployed backend.

### Backend Deployment (Render)
1. Push your backend code to a GitHub repository.
2. Go to [Render](https://render.com/), connect your GitHub repository, and deploy the backend.
3. Add environment variables in the Render dashboard.

---

## Features to Add in Future
- Payment gateway integration.
- Order tracking functionality.
- Admin panel for managing products and users.

---

## Contributors
- **Vaibhav Giri** - Developer

---

## License
This project is licensed under the MIT License.
