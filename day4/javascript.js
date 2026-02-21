// =============================
// Section 1 — Variables & Assignment
// =============================

// 1 & 2
let name = "Logeshwari";
let age = 20;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

// 3 Swap without third variable
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("a:", a, "b:", b);

// 4 Output prediction
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (because primitive values copy by value)

// 5 using const
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area:", area);

// =============================
// Section 2 — Operators
// =============================

// 6 Arithmetic operations
let num1 = 20;
let num2 = 6;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 7 Predict output
console.log(5 + "5"); // "55"
console.log(5 - "2"); // 3
console.log(true + 1); // 2

// 8 Compare with 100
let n = 120;

if (n > 100) console.log("Greater than 100");
else if (n === 100) console.log("Equal to 100");
else console.log("Less than 100");

// 9 == vs ===
console.log(5 == "5");  // true
console.log(5 === "5"); // false

// 10 Logical operators
let personAge = 25;

if (personAge >= 18 && personAge <= 60) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}

// =============================
// Section 3 — Control Statements
// =============================

// 11 Even or odd
let num = 7;
if (num % 2 === 0) console.log("Even");
else console.log("Odd");

// 12 FizzBuzz
let f = 15;

if (f % 3 === 0 && f % 5 === 0) console.log("FizzBuzz");
else if (f % 3 === 0) console.log("Fizz");
else if (f % 5 === 0) console.log("Buzz");

// 13 Switch weekday
let day = 3;
switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
  default: console.log("Invalid");
}

// 14 For loop
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log("Even:", i);
}

// 15 While sum 1 to N
let N = 5;
let sum = 0;
let i = 1;

while (i <= N) {
  sum += i;
  i++;
}
console.log("Sum:", sum);

// 16 break & continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}

// =============================
// Section 4 — Functions
// =============================

// 17 Sum function
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

// 18 Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 6));

// 19 Prime check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

// 20 Reverse string
function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("hello"));

// 21 Output
function test() {
  return;
  console.log("Hello");
}
test(); // nothing prints

// 22 Largest in array
function largest(arr) {
  return Math.max(...arr);
}
console.log(largest([3, 7, 2, 9, 5]));

// =============================
// Section 5 — Integrated Challenge
// =============================

function calculateGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else return "Fail";
}

let marks = 82;
let grade = calculateGrade(marks);

console.log("Marks:", marks);
console.log("Grade:", grade);
