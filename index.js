const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// middleware
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Dummy product data (Replace with database)
let products = [
  { id: 1, name: "Product A", price: 50 },
  { id: 2, name: "Product B", price: 100 }
];

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.render("index", { products });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const { name, price } = req.body;
  products.push({ id: products.length + 1, name, price });
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.render("edit", { product });
});

app.post("/edit/:id", (req, res) => {
  const { name, price } = req.body;
  const product = products.find(p => p.id == req.params.id);
  product.name = name;
  product.price = price;
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.redirect("/");
});



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// Define the PORT variable
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



mongoose
  .connect(
    "mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(4000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
