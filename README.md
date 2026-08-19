# 🛍️ FashionBlast

### Full-Stack E-Commerce Web Application

FashionBlast is a full-stack e-commerce web application built to provide a complete online shopping experience. The application includes user authentication, product browsing, search and category filtering, wishlist, shopping cart, checkout, and order management.

🌐 **Live Demo:** https://fashionblast.onrender.com

---

## 🚀 Features

- 👤 User Registration & Login
- 🔐 Secure Password Hashing with bcrypt
- 🛍️ Product Browsing
- 🔎 Product Search
- 🏷️ Category Filtering
- 📄 Product Details
- ❤️ Wishlist Management
- 🛒 Shopping Cart
- 💰 Cart Total Calculation
- 📦 Checkout & Order Placement
- 📋 Order History
- 🚪 User Logout
- 🖼️ Product Images
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript, EJS |
| Backend | Node.js, Express.js |
| Database | MongoDB, MongoDB Atlas |
| ODM | Mongoose |
| Authentication | bcrypt |
| Sessions | express-session |
| Flash Messages | connect-flash |
| Environment | dotenv |
| Version Control | Git, GitHub |
| Deployment | Render |

---

## 📂 Project Structure

```text
FashionBlast/
│
├── app.js
├── package.json
├── package-lock.json
├── seedProducts.js
├── .gitignore
│
├── data/
│   └── products.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   ├── Wishlist.js
│   └── Order.js
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   ├── index.ejs
│   ├── products.ejs
│   ├── product_details.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── cart.ejs
│   ├── wishlist.ejs
│   ├── checkout.ejs
│   └── orders.ejs
│
└── README.md

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/Soumya0481/FashionBlast.git
2. Open the Project
cd FashionBlast
3. Install Dependencies
npm install

📦 Required Libraries

The project uses the following Node.js packages:

Express.js
Mongoose
EJS
dotenv
bcrypt
bcryptjs
express-session
connect-flash

All dependencies are installed automatically using:

npm install

MongoDB Configuration
FashionBlast uses MongoDB Atlas as its cloud database.
Create a .env file in the project root:
MONGO_URI=your_mongodb_atlas_connection_string
⚠️ Important: Never upload .env or your MongoDB credentials to GitHub.
Make sure .gitignore contains:
.env
node_modules/
🌱 Seed Product Data

After configuring MongoDB Atlas, insert the product data:
node seedProducts.js

Expected output:
✅ MongoDB Connected
🎉 Products Inserted Successfully!

Run Locally

Start the application:
npm start
The application will run at:
http://localhost:3000
Open the URL in your browser.

How to Use

1. Register
Create a new FashionBlast account using the Register page.
2. Login
Log in using your registered credentials.
3. Browse Products
Explore products, search for products, and filter them by category.
4. View Product Details
Select a product to view its image, price, and details.
5. Wishlist
Add products to your wishlist and manage saved products.
6. Shopping Cart
Add products to your cart, review selected items, and check the total amount.
7. Checkout
Proceed to checkout and place your order.
8. Orders
View your previously placed orders from the Orders section.
9. Logout
Logout securely from your account.

☁️ Deployment

FashionBlast is deployed using Render and uses MongoDB Atlas for cloud database storage.
Deployment Configuration

Build Command:
npm install
Start Command:

npm start
Deployment Architecture
GitHub
   ↓
Render
   ↓
Node.js + Express.js
   ↓
MongoDB Atlas

🌐 Live Application
🚀 FashionBlast Live Website
https://fashionblast.onrender.com

🎯 Project Highlights

This project demonstrates practical experience in:
Full-Stack Web Development
Node.js & Express.js Backend Development
MongoDB Database Integration
User Authentication
Session Management
CRUD Operations
Server-Side Rendering with EJS
Shopping Cart Development
Wishlist Management
Order Management
Cloud Deployment
Git & GitHub
🔮 Future Improvements
💳 Online Payment Gateway
👨‍💼 Admin Dashboard
⭐ Product Reviews & Ratings
📦 Advanced Order Tracking
📧 Email Notifications
📊 Sales Analytics
🤖 AI-Based Product Recommendations
📦 Inventory Management

👩‍💻 Developer
Soumya
GitHub:
https://github.com/Soumya0481

⭐ Support
If you like this project, consider giving the repository a ⭐ on GitHub.

📄 License
This project is developed for educational and portfolio purposes.
