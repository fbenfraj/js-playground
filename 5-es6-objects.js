//Object property shorthand

const name = "Farouk";
const userAge = 25;

const user = {
  name,
  age: userAge,
  lodation: "Paris"
};

console.log(user);

//Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const label = product.label
// const stock = product.stack

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;
// console.log(productLabel, price, stock, salePrice);
// console.log(rating)

//default params added
const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
