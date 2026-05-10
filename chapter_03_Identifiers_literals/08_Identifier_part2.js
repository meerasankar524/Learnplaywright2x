// ==========================================
// JavaScript Identifier Naming Conventions
// ==========================================

// 1. camelCase (most common for variables and functions)
// First word lowercase, subsequent words capitalized
let firstName = "Alice";
let lastName = "Smith";
let totalPrice = 199.99;
let isUserLoggedIn = true;

function calculateTotalPrice() {
    return totalPrice * 1.08;
}

// 2. PascalCase (commonly used for class names and constructors)
// Every word starts with a capital letter
class UserProfile {
    constructor(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
}

function PersonInfo(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 3. snake_case (words separated by underscores)
// Common in Python, sometimes used in JavaScript for constants or config
let user_name = "Bob";
let total_price = 49.99;
let is_active = false;
let error_message = "Something went wrong";

const MAX_RETRY_COUNT = 5;
const API_BASE_URL = "https://api.example.com";
const DATABASE_CONNECTION_STRING = "mongodb://localhost:27017";

// 4. SCREAMING_SNAKE_CASE / MACRO_CASE (all uppercase with underscores)
// Convention for constants and environment variables
const PI = 3.14159;
const MAX_USERS = 100;
const DEFAULT_TIMEOUT = 3000;
const ENVIRONMENT = "production";

// 5. kebab-case (words separated by hyphens)
// NOT valid for JavaScript identifiers (hyphens are subtraction operators)
// Used in HTML/CSS class names and file names
// let user-name = "invalid"; // SyntaxError
// Valid usage in strings:
let cssClassName = "user-profile-card";
let fileName = "user-profile-data.json";

// 6. Hungarian Notation (prefix indicates data type)
// Older convention, less common in modern JavaScript
let strUserName = "Charlie";    // str = string
let nUserAge = 25;              // n = number
let bIsVerified = true;         // b = boolean
let arrUserList = [];           // arr = array
let objUserData = {};           // obj = object
let fnCalculateSum = function() {}; // fn = function

// ==========================================
// Practical Examples: Same variable in different cases
// ==========================================

// camelCase
let customerOrderHistory = [];

// PascalCase
// class CustomerOrderHistory {} // Would be a class name

// snake_case
let customer_order_history = [];

// SCREAMING_SNAKE_CASE
const CUSTOMER_ORDER_HISTORY_TABLE = "order_history";

// ==========================================
// Best Practices in JavaScript
// ==========================================

// Variables: camelCase
let currentUser = { id: 1, name: "David" };
let cartItems = ["laptop", "mouse", "keyboard"];
let shippingAddress = "123 Main St";

// Functions: camelCase
function getUserById(id) {
    return currentUser;
}

function addItemToCart(item) {
    cartItems.push(item);
}

// Classes: PascalCase
class ProductCategory {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class OrderProcessor {
    processOrder(order) {
        return "Order processed: " + order.id;
    }
}

// Constants: SCREAMING_SNAKE_CASE
const TAX_RATE = 0.08;
const MAX_CART_ITEMS = 50;
const FREE_SHIPPING_THRESHOLD = 35.00;

// Private variables (by convention, prefix with underscore)
let _internalCounter = 0;
let _secretApiKey = "sk-abc123";

// jQuery/style variables (prefix with $)
let $headerElement = null; // Would reference a DOM element
let $modalContainer = null;

// ==========================================
// Console Output Demo
// ==========================================
console.log("camelCase examples:");
console.log("firstName:", firstName);
console.log("totalPrice:", totalPrice);
console.log("isUserLoggedIn:", isUserLoggedIn);

console.log("\nPascalCase examples:");
let userProfile = new UserProfile("Eve", 30);
console.log("userProfile:", userProfile);

console.log("\nsnake_case examples:");
console.log("user_name:", user_name);
console.log("total_price:", total_price);

console.log("\nSCREAMING_SNAKE_CASE examples:");
console.log("PI:", PI);
console.log("MAX_USERS:", MAX_USERS);

console.log("\nHungarian notation examples:");
console.log("strUserName:", strUserName);
console.log("nUserAge:", nUserAge);
console.log("bIsVerified:", bIsVerified);

console.log("\nPrivate convention examples:");
console.log("_internalCounter:", _internalCounter);
console.log("_secretApiKey:", _secretApiKey);

/** 
 * - camelCase — variables, functions (firstName, calculateTotalPrice)
- PascalCase — classes, constructors (UserProfile, ShoppingCart)
- snake_case — config/variables (user_name, total_price)
- SCREAMING_SNAKE_CASE — constants (MAX_USERS, API_BASE_URL)
- kebab-case — explained why it’s invalid for JS identifiers but valid in strings/CSS
- Hungarian notation — type-prefixed style (strUserName, bIsVerified)
- Conventions — private _prefix and jQuery $prefix styles
 */


var v = 5;

console.log("v:", v);


//  Alt+shift+down to duplicate line