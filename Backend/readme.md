# Vibe Commerce - Backend

This is the backend server for the **Vibe Commerce Mock E-Commerce Cart** assignment.  
It provides REST APIs for user authentication, product listing, cart management, and checkout functionality.

---

## 🚀 Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for Authentication
- **bcryptjs** for Password Hashing
- **dotenv** for environment configuration

---

## 📁 Project Structure

<pre> ```
backend/
├── config/
│ ├── dbConfig.js
├── controller/
│ ├── authController.js
│ ├── productController.js
│ ├── cartController.js
│ └── orderController.js
├── middleware/
│ └── auth.js
├── model/
│ ├── User.js
│ ├── Product.js
│ ├── CartItem.js
│ └── Order.js
├── routes/
│ ├── auth.js
│ ├── products.js
│ ├── cart.js
│ └── orders.js
├── .env.example
├── package.json
└── server.js
``` </pre>

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Ashi-Jain07/Vibe-Commerce.git
cd Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the backend root folder:
```bash
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key
```

### 4. Run Server
Development (with nodemon):

```bash
npm start
```
Production:

```bash
npm start
```
## 🧩 API Endpoints
<pre> ```
Auth Routes
Method	Endpoint	        Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	    Login user and return JWT token

Product Routes
Method	 Endpoint	    Description
GET	    /api/products	Fetch all products

Cart Routes (Requires Auth)
Method	Endpoint	   Description
GET	    /api/cart	   Get user's cart items
POST	/api/cart	   Add item to cart { productId, qty }
PUT	    /api/cart/:id  Update cart item quantity
DELETE	/api/cart/:id  Remove item from cart

Checkout Routes (Requires Auth)
Method	Endpoint	    Description
POST	/api/checkout	Mock checkout and generate receipt
GET	    /api/checkout	Get user's past orders
``` </pre>

🧠 Notes
Products are auto-seeded when /api/products is called for the first time.

JWT authentication is required for cart and checkout routes.

Passwords are securely hashed before saving to the database.

## ✅ Example Request
### Register User
```bash
Copy code
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Add to Cart
```bash
Copy code
POST /api/cart
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": "65a3...",
  "qty": 2
}
```