db.createCollection("Products");

db.Products.insertMany([
  {
    Product_id: 301,
    name: "Laptop",
    category: "Electronics",
    brand: "Dell",
    Price: 55000,
    Stock: 20
  },
  {
    Product_id: 302,
    name: "Smartphone",
    category: "Electronics",
    brand: "Samsung",
    Price: 25000,
    Stock: 35
  }
]);

db.Products.findOne({ Product_id: 302 });

db.Products.updateOne(
  { Product_id: 301 },
  { $set: { Stock: 5 } }
);