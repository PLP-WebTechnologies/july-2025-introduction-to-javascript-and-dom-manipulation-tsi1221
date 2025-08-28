// ------------------------------------
// Part 1: Variables & Conditionals
// ------------------------------------
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", function() {
    const age = parseInt(ageInput.value);
    if (isNaN(age)) {
        ageResult.textContent = "Please enter a valid number.";
    } else if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a minor.";
    }
});

// ------------------------------------
// Part 2: Functions
// ------------------------------------

// Function 1: Greeting
function greet(name) {
    return `Hello, ${name}! Welcome to JS Fundamentals.`;
}

const greetBtn = document.getElementById("greetBtn");
const greetResult = document.getElementById("greetResult");

greetBtn.addEventListener("click", function() {
    const name = prompt("Enter your name:");
    greetResult.textContent = greet(name);
});

// Function 2: Calculate Total
function calculateTotal(a, b, c) {
    return a + b + c;
}

const calcBtn = document.getElementById("calcBtn");
const totalResult = document.getElementById("totalResult");

calcBtn.addEventListener("click", function() {
    const total = calculateTotal(10, 20, 30);
    totalResult.textContent = `The total is ${total}`;
});

// ------------------------------------
// Part 3: Loops
// ------------------------------------
const loopBtn = document.getElementById("loopBtn");
const numberList = document.getElementById("numberList");

loopBtn.addEventListener("click", function() {
    numberList.innerHTML = ""; // Clear previous list
    for (let i = 1; i <= 5; i++) {          // For loop example
        const li = document.createElement("li");
        li.textContent = `Number: ${i}`;
        numberList.appendChild(li);
    }

    const arr = ["Apple", "Banana", "Cherry"];
    arr.forEach(function(item) {            // forEach loop example
        const li = document.createElement("li");
        li.textContent = `Fruit: ${item}`;
        numberList.appendChild(li);
    });
});

// ------------------------------------
// Part 4: DOM Manipulation
// ------------------------------------
const toggleBtn = document.getElementById("toggleBtn");
const domText = document.getElementById("domText");

toggleBtn.addEventListener("click", function() {
    domText.classList.toggle("highlight");  // Toggle highlight class
});

const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

addItemBtn.addEventListener("click", function() {
    const li = document.createElement("li"); // Create new item
    li.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(li);               // Append to list
});

const displayBtn = document.getElementById("displayBtn");
const inputText = document.getElementById("inputText");
const displayResult = document.getElementById("displayResult");

displayBtn.addEventListener("click", function() {
    displayResult.textContent = inputText.value; // Show user input
});
