/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

//🔹 Task 1: Filter Products by Availability


function filterProducts (products, callback) {
 return products.filter(callback);
}
// filtering for in stock products
const inStockProducts = filterProducts(products, product => product.inStock);
console.log(inStockProducts)

// 🔹 Task 2: Transform Product Names

const uppercasedNames = products.map(function(product) {     // new variable
  return product.name.toUpperCase();
});

console.log("Uppercase products",uppercasedNames)

// 🔹 Task 3: Generate Discounted Prices

function applyDiscount(discountPercent) {
  return function(product) {
    const discountedAmount = product.price * (discountPercent / 100);
    return product.price - discountedAmount;
  };
}

const discount30 = applyDiscount(30); // applying a 30% discpunt

products.forEach(function(product) {
  product.salePrice = discount30(product);
});

console.log(products);

//🔹 Task 4: Calculate Total Inventory Value


const totalInventoryValue = products.reduce(function(total, product) {
  if (product.inStock) {
    return total + product.price;
  }
  return total;
}, 0);

console.log("Total value in stock:", totalInventoryValue);


/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/


// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);
