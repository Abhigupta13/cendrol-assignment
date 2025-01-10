# User Management API

This is a **User Management API** built with Node.js and MongoDB. The application provides a RESTful API to manage user information, including functionalities such as creating, reading, updating, and deleting users. The project also includes authentication to restrict access to the API.

## Features
- CRUD operations for managing users:
  - Get all users or a single user.
  - Create a new user.
  - Update existing user information.
  - Delete a user.
- User fields include:
  - Name
  - Email
  - Mobile
  - Profile Picture
  - Password
- Authentication:
  - JWT-based authentication for secure access.
  - Routes are restricted to authenticated users.
- Profile picture upload functionality.
- Proper folder structure for scalability and maintainability.

---

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Other Tools:**
  - Mongoose (ODM for MongoDB)
  - Multer (for handling file uploads)
  - bcrypt.js (for password hashing)
  - dotenv (for environment variable management)

---

## Installation and Setup

### 1. Clone the Repository
```bash
https://github.com/Abhigupta13/cendrol-assignment.git
cd cendrol-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/user-management
JWT_SECRET=your_jwt_secret
```

### 4. Run the Application
```bash
npm start
```
The server will start on `http://localhost:3000`.

---

## API Endpoints

### Authentication
| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | `/api/auth`    | Login and get a token    |

### Users
| Method | Endpoint            | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/users`         | Get all users            |
| GET    | `/api/users/:id`     | Get a single user        |
| POST   | `/api/users`         | Create a new user        |
| PUT    | `/api/users/:id`     | Update a user            |
| DELETE | `/api/users/:id`     | Delete a user            |

---

## Example Requests
### Create User
```json
POST /api/users
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "mobile": "1234567890",
  "password": "securepassword"
}
```

### Response:
```json
{
  "message": "User created successfully",
  "user": {
    "id": "1234567890abcdef",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "mobile": "1234567890"
  }
}
```

---

## Deployment
This project is hosted using [Render](https://render.com). You can access the live API at:
- **API Base URL:** [https://your-app.onrender.com](https://your-app.onrender.com)
