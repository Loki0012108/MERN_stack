// ===============================
// OBJECT LITERALS
// ===============================

const user = {
  name: "Sam",
  age: 27,
  isAdmin: false
};

// Accessing properties
console.log(user.name);       // dot notation
console.log(user["age"]);     // bracket notation

// Dynamic key
let key = "name";
console.log(user[key]);

// Add / modify
user.city = "Chennai";
user.age = 29;

// Delete
delete user.isAdmin;

console.log(user);


// ===============================
// NESTED OBJECT
// ===============================

const person = {
  name: "Sam",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

console.log(person.address.city);


// ===============================
// DESTRUCTURING
// ===============================

// Object destructuring
const { name, age } = person;
console.log(name, age);

// Rename
const { name: username } = person;
console.log(username);

// Default value
const { role = "user" } = person;
console.log(role);

// Nested destructuring
const { address: { city } } = person;
console.log(city);


// ===============================
// ARRAY DESTRUCTURING
// ===============================

const arr = [10, 20, 30];

const [a, b] = arr;
console.log(a, b);

const [first, , third] = arr;
console.log(first, third);


// ===============================
// OBJECT METHODS
// ===============================

const student = {
  name: "Sam",
  greet() {
    return "Hello " + this.name;
  }
};

console.log(student.greet());


// ===============================
// THIS KEYWORD
// ===============================

const obj = {
  name: "Sam",
  show() {
    console.log(this.name);
  }
};

obj.show();


// ===============================
// ARRAY METHODS
// ===============================

const numbers = [1, 2, 3, 4];

// map
const doubled = numbers.map(num => num * 2);
console.log("map:", doubled);

// filter
const even = numbers.filter(num => num % 2 === 0);
console.log("filter:", even);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", sum);

// forEach
numbers.forEach(num => console.log("forEach:", num));

// find
const users = [{ id: 1 }, { id: 2 }];
const found = users.find(u => u.id === 2);
console.log("find:", found);

// some
console.log("some:", numbers.some(n => n > 3));

// every
console.log("every:", numbers.every(n => n > 0));


// ===============================
// SORT
// ===============================

const nums = [10, 5, 20];

nums.sort((a, b) => a - b);
console.log("Ascending:", nums);

nums.sort((a, b) => b - a);
console.log("Descending:", nums);


// ===============================
// SORT OBJECTS
// ===============================

const people = [
  { name: "A", age: 30 },
  { name: "B", age: 20 }
];

people.sort((a, b) => a.age - b.age);
console.log("Sorted by age:", people);


// ===============================
// REAL EXAMPLES
// ===============================

// total cart price
const cart = [
  { price: 100 },
  { price: 200 },
  { price: 300 }
];

const total = cart.reduce((t, item) => t + item.price, 0);
console.log("Total:", total);

// emails list
const usersList = [
  { email: "a@gmail.com" },
  { email: "b@gmail.com" }
];

const emails = usersList.map(u => u.email);
console.log("Emails:", emails);

// filter products
const products = [
  { price: 500 },
  { price: 2000 },
  { price: 1500 }
];

const costly = products.filter(p => p.price > 1000);
console.log("Costly:", costly);
