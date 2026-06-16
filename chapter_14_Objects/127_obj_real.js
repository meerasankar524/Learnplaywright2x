const { log, timeLog } = require("node:console");

let config = {};

config.browser = "chrome";
config.timout = 3000;
config.testname = "Login Test";
console.log(config);

delete config.browser
console.log(config);
if (config.browser === "chrome") {
    console.log("I will Execute my Test case");
}

//Can also Delete a Key

//Alternative way

let config2 = {
   browser = "chrome",
   timeout = 3000,
   testname = "login test"
};
