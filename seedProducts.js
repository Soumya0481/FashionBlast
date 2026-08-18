const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");
const products = require("./data/products");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

    console.log("✅ MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany(products);
    console.log("🎉 Products Inserted Successfully!");

    process.exit();

})
.catch(err => console.log(err));