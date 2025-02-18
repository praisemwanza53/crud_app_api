## CRUD App Api

This is a simple CRUD (Create, Read, Update, Delete) application built with **Node.js, Express, and MongoDB**. It provides RESTful API endpoints for managing data in a MongoDB database.

### Features
- Create new records
- Read existing records
- Update records
- Delete records
- Connects to MongoDB Atlas

## Installation

### 1. Clone the repository
```sh
git clone https://github.com/your-username/crud_app.git
cd crud_app
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up environment variables
Create a `.env` file in the project root and add:
```
MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/Node-API
PORT=3000
```

### 4. Start the server
```sh
npm run dev
```

## API Endpoints
| Method | Endpoint       | Description      |
|--------|--------------|-----------------|
| GET    | /items       | Get all items   |
| POST   | /items       | Create a new item |
| GET    | /items/:id   | Get an item by ID |
| PUT    | /items/:id   | Update an item by ID |
| DELETE | /items/:id   | Delete an item by ID |

## Dependencies
Dependencies are listed in `package.json`. You can also install them using:
```sh
npm install
```

## License
This project is licensed under the MIT License.

---

### **requirements.txt**
```
nodemon
express
mongoose
dotenv
cors
body-parser
```

Ensure you have **Node.js** installed before running `npm install`. If using **MongoDB Compass**, connect with your connection string.

