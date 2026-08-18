const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const session = require("express-session");
const flash = require("connect-flash");
const User = require("./models/User");
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const Wishlist = require("./models/Wishlist");
const Order = require("./models/Order");
const bcrypt = require("bcrypt");


const app = express();   

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.error("MongoDB Error:");
    console.error(err);
  });

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "fashionblastsecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

app.set("view engine", "ejs");
app.use(express.static("public"));

const PORT=3000;

app.get("/", async (req, res) => {

    try {

        const products = await Product.find({ featured: true }).limit(8);
    

        res.render("index", {
            user: req.session.user,
            products
        });

    } catch (error) {

        console.log(error);

        res.send("Error Loading Products");

    }

});

app.get("/products", async (req, res) => {

    try {

        const category = req.query.category;
        const search = req.query.search;

        let filter = {};

        // Category filter
        if (category && category !== "All") {
            filter.category = category;
        }

        // Search filter
       // Search filter
if (search) {
    filter.$or = [
        {
            name: {
                $regex: search,
                $options: "i"
            }
        },
        {
            brand: {
                $regex: search,
                $options: "i"
            }
        },
        {
            category: {
                $regex: search,
                $options: "i"
            }
        }
    ];
}
        const products = await Product.find(filter);

        res.render("products", {
            products,
            user: req.session.user,
            selectedCategory: category || "All",
            search: search || ""
        });

    } catch (error) {

        console.log(error);
        res.send("Error Loading Products");

    }

});

app.get("/product/:id", async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        res.render("product_details", {
            product,
            user: req.session.user
        });

    } catch (error) {

        console.log(error);
        res.send("Product not found.");

    }

});

app.get("/checkout", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const cartItems = await Cart.find({
            user: req.session.user._id
        }).populate("product");

        const validCartItems = cartItems.filter(item => item.product);

        if (validCartItems.length === 0) {
            return res.redirect("/cart");
        }

        let total = 0;

        validCartItems.forEach(item => {
            total += item.product.price * item.quantity;
        });

        res.render("checkout", {
            cartItems: validCartItems,
            total,
            user: req.session.user
        });

    } catch (error) {

        console.log(error);
        res.send("Error loading checkout.");

    }

});

app.post("/checkout", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const cartItems = await Cart.find({
            user: req.session.user._id
        }).populate("product");

        const validCartItems = cartItems.filter(item => item.product);

        if (validCartItems.length === 0) {
            return res.redirect("/cart");
        }

        const orders = [];

        for (const item of validCartItems) {

            const order = new Order({
                user: req.session.user._id,
                product: item.product._id,
                quantity: item.quantity,
                totalPrice: item.product.price * item.quantity,
                status: "Placed"
            });

            await order.save();

            orders.push(order);
        }

        // Clear cart after successful order
        await Cart.deleteMany({
            user: req.session.user._id
        });

        // Go to orders page
        res.redirect("/orders");

    } catch (error) {

        console.log(error);
        res.send("Error placing order.");

    }

});

app.get("/checkout/:id", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.send("Product not found.");
        }

        res.render("checkout", {
            product,
            user: req.session.user
        });

    } catch (error) {

        console.log(error);
        res.send("Error loading checkout.");

    }

});

app.post("/checkout/:id", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.send("Product not found.");
        }

        const order = new Order({
            user: req.session.user._id,
            product: product._id,
            quantity: 1,
            totalPrice: product.price,
            status: "Placed"
        });

        await order.save();

        res.render("order-success", {
            order,
            product,
            user: req.session.user
        });

    } catch (error) {

        console.log(error);
        res.send("Error placing order.");

    }

});

app.get("/cart", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const cartItems = await Cart.find({
            user: req.session.user._id
        }).populate("product");

        // Remove cart items whose product no longer exists
        const validCartItems = cartItems.filter(item => item.product);

        res.render("cart", {
            cartItems: validCartItems,
            user: req.session.user
        });

    } catch (error) {

        console.log(error);
        res.send("Error loading cart.");

    }

});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.send("❌ User not found.");
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send("❌ Incorrect password.");
        }

       
        // Save user session
        req.session.user = user;

        // Save session before redirecting
        req.session.save((err) => {
            if (err) {
            console.log(err);
            return res.send("Session Error");
            }

            res.redirect("/");
        });

    } catch (error) {
        console.log(error);
        res.send("Something went wrong.");
    }
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post("/register", async (req, res) => {
    try {
        const {
            name,
            age,
            gender,
            mobile,
            email,
            location,
            password,
            confirmPassword
        } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.send("❌ Passwords do not match.");
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send("❌ Email already registered.");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            age,
            gender,
            mobile,
            email,
            location,
            password: hashedPassword,
        });

        await newUser.save();

        res.redirect("/login");

    } catch (error) {
        console.error(error);
        res.send("❌ Something went wrong.");
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
    });
});

app.get("/forgot-password", (req, res) => {
    res.render("forgot-password");
});

app.post("/forgot-password", async (req, res) => {
    try {

        const { email, newPassword, confirmPassword } = req.body;

        // Check passwords
        if (newPassword !== confirmPassword) {
            return res.send("❌ Passwords do not match.");
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.send("❌ Email not found.");
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password
        user.password = hashedPassword;

        await user.save();

        res.redirect("/login");

    } catch (error) {
        console.log(error);
        res.send("❌ Something went wrong.");
    }
});

app.post("/wishlist/add/:id", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const productId = req.params.id;
        const userId = req.session.user._id;

        const existingWishlist = await Wishlist.findOne({
            user: userId,
            product: productId
        });

        if (!existingWishlist) {

            const wishlistItem = new Wishlist({
                user: userId,
                product: productId
            });

            await wishlistItem.save();
        }

        res.redirect("/products");

    } catch (error) {

        console.log(error);
        res.send("Error adding product to wishlist.");

    }

});

app.post("/wishlist/remove/:id", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        await Wishlist.findOneAndDelete({
            _id: req.params.id,
            user: req.session.user._id
        });

        res.redirect("/wishlist");

    } catch (error) {

        console.log(error);
        res.send("Error removing item from wishlist.");

    }

});

app.post("/cart/add/:id", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const productId = req.params.id;

        const existingCart = await Cart.findOne({
            user: req.session.user._id,
            product: productId
        });

        if (existingCart) {

            existingCart.quantity += 1;
            await existingCart.save();

        } else {

            const cartItem = new Cart({
                user: req.session.user._id,
                product: productId,
                quantity: 1
            });

            await cartItem.save();
        }

        res.redirect("/products");

    } catch (error) {

        console.log(error);
        res.send("Error adding product to cart.");

    }

});

app.post("/cart/remove/:id", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        await Cart.findOneAndDelete({
            _id: req.params.id,
            user: req.session.user._id
        });

        res.redirect("/cart");

    } catch (error) {

        console.log(error);
        res.send("Error removing item.");

    }

});

app.post("/cart/increase/:id", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const cartItem = await Cart.findOne({
            _id: req.params.id,
            user: req.session.user._id
        });

        if (!cartItem) {
            return res.redirect("/cart");
        }

        cartItem.quantity += 1;

        await cartItem.save();

        res.redirect("/cart");

    } catch (error) {

        console.log(error);

        res.send("Error updating quantity.");

    }

});

app.post("/cart/decrease/:id", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const cartItem = await Cart.findOne({
            _id: req.params.id,
            user: req.session.user._id
        });

        if (!cartItem) {
            return res.redirect("/cart");
        }

        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            await cartItem.save();
        }

        res.redirect("/cart");

    } catch (error) {

        console.log(error);

        res.send("Error updating quantity.");

    }

});

app.get("/wishlist", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const wishlistItems = await Wishlist.find({
            user: req.session.user._id
        }).populate("product");

        res.render("wishlist", {
            wishlistItems,
            user: req.session.user
        });

    } catch (error) {

        console.log(error);
        res.send("Error loading wishlist.");

    }

});

app.get("/orders", async (req, res) => {

    try {

        if (!req.session.user) {
            return res.redirect("/login");
        }

        const orders = await Order.find({
            user: req.session.user._id
        })
        .populate("product")
        .sort({ createdAt: -1 });

        // Remove orders whose product no longer exists
        const validOrders = orders.filter(order => order.product);

        res.render("orders", {
            orders: validOrders,
            user: req.session.user
        });

    } catch (error) {

        console.log(error);
        res.send("Error loading orders.");

    }

});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

