# 🛍️ Samagri Store – MERN E-commerce Web App

A full-stack **E-commerce web application** built using the **MERN stack**, integrated with **Clerk Authentication** and **Razorpay Payment Gateway**.

This project allows users to browse products, add to cart, place orders, and make secure online payments.

---

## 🚀 Live Demo
🔗 Coming Soon...

---

## 📌 Features

### 👤 Authentication (Clerk)
- Secure login/signup using Clerk
- Google login support
- User session management

### 🛒 Shopping Features
- Add to Cart
- Buy Now option
- Dynamic cart count
- Product listing & details page

### 📦 Order System
- Place orders with address
- Store order in MongoDB
- Order summary with GST & shipping
- Order history (extendable)

### 💳 Payment Integration
- Razorpay integration
- UPI / Card / Wallet support
- Payment verification
- Auto open payment popup

### 🧾 Address System
- Full Name
- Phone Number
- Address, City, Pincode

### ⚙️ Admin (Basic)
- Manage products (extendable)
- View orders

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React.js
- Tailwind CSS
- Clerk Auth

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Payment
- Razorpay API

---

## 📁 Folder Structure
samagri/
│
├── frontend/ # Next.js App
├── backend/ # Express API
├── .env.example # Environment template
├── package.json # Root scripts (concurrently)
└── README.md 



---

## ⚙️ Environment Variables

Create a `.env` file in **backend** folder:
NODE_ENV=development
PORT=5000

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret

---

## ▶️ Installation & Setup

### 1️⃣ Clone Repo


git clone https://github.com/YOUR_USERNAME/samagri.git

cd samagri

---

### 2️⃣ Install Dependencies


npm install
cd backend && npm install
cd ../frontend && npm install


---

### 3️⃣ Run Project (Frontend + Backend Together)


npm run dev


---

### 🌐 Runs on:
- Frontend → http://localhost:3000  
- Backend → http://localhost:5000  

---

## 💳 Payment Setup (Razorpay)

1. Go to https://razorpay.com  
2. Create account  
3. Get API keys  
4. Add in `.env`  

---

## 🔐 Authentication Setup (Clerk)

1. Go to https://clerk.com  
2. Create project  
3. Add keys in frontend `.env.local`  

---

## 📡 API Routes

### User
- `POST /api/users` → Register
- `POST /api/users/login` → Login

### Orders
- `POST /api/orders` → Create order
- `GET /api/orders` → Get all orders
- `GET /api/orders/:id` → Get single order

### Payment
- `POST /api/payment/create` → Razorpay order

---

## 🧠 Key Concepts Used

- REST API architecture
- JWT authentication (legacy)
- Clerk authentication (modern)
- Payment gateway integration
- MongoDB schema design
- Context API (cart management)

---

## ⚠️ Security

- `.env` is ignored using `.gitignore`
- Secrets are not exposed
- Payment keys are protected

---

## 📸 Screenshots
_Add your screenshots here_

---

## 🚀 Future Improvements

- Order tracking system
- Admin dashboard
- Product reviews & ratings
- Coupon system
- Email notifications

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License
MIT License

---

## 👨‍💻 Author

**Sanju Kishor (Samagri Store Developer)**  
📍 Agra, India  
