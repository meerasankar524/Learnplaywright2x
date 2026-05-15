let firstName = "Meeeerrra";

let fullname = `Hi ${firstName} Venkatesh`;
console.log(fullname);



let env = "Meera Venkatesh";
env = "Meera Venkatesh"; // Error: Assignment to constant variable.

//Playwright test
const userid = 12345;
const apiurl = `https://${env}.api.example.com/users/${userid}`;
console.log(apiurl);

//Logs
const testName = "Login Test";
const status = "Passed";
const duration = 2.3; // seconds
console.log(`[${status}] ${testName} completed in ${duration}s`);


//Template Literals (Backticks)

const testCase = "checkout_flow"
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });

const user = "Meera";
const role = "Admin";

const payload = {
    "user": "${user}",
    "role": "${role}"
    "timestamp": "${new Date().toISOString()}"
};
console.log(payload); 
