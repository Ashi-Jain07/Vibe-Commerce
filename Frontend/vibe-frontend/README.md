# Vibe Commerce - Frontend

This is the **React** frontend for the **Vibe Commerce Mock E-Commerce Cart**.  
It interacts with the backend REST APIs to display products, manage cart, and perform mock checkout.

---

## 🚀 Tech Stack

- **React 18**
- **React Router DOM**
- **Fetch API** for backend communication
- **Local Storage** for JWT persistence
- **Tailwind CSS (responsive)** for layout and styling

---

## 📁 Project Structure

frontend/
├── src/
│ ├── api.js
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── ProductCard.jsx
│ │ ├── Cart.jsx
│ │ ├── CheckoutModal.jsx
│ └── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Orders.jsx
│ └── OpenCart.jsx
├── package.json
├── README.md
└── index.html

---

## ⚙️ Setup Instructions


### 1. Clone Repository

```bash
git clone https://github.com/Ashi-Jain07/Vibe-Commerce.git
cd Frontend\vibe-frontend
```

### 2. Install Dependencies

```bash
cd frontend
npm install
```

### 3. Configure API URL
Create a .env file in the frontend root:

```bash
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Run Frontend
```bash
Copy code
npm start
```

The app will start on http://localhost:5173 by default.

## 🧩 Features
- User Authentication (Login / Register)

- Products Grid with “Add to Cart” buttons

- Cart Page — view, update, and remove cart items

- Checkout Modal — confirm order and show receipt

- Order History page

- Responsive UI

### 🔗 API Integration
The frontend connects to the backend routes:

- /api/auth/*

- /api/products

- /api/cart

- /api/checkout

Tokens are stored in LocalStorage and included in the Authorization header.

🧠 Notes
You must run the backend before starting the frontend.

Update the REACT_APP_API_URL if the backend runs on a different port or host.
