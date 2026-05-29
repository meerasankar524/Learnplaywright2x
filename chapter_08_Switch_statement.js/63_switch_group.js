// switch group

let browser = "firefox";

switch (browser) {
    case "chrome":
    case "edge":
    case "brave":
    case "opera":
        console.log("Chromium product");
        break;
    case "Firefox":
        console.log("Mozilla project");
        break;
    case "Safari":
        console.log("Apple browser uses JS..... something");
        break;
    default:
        console.log("Unknown browser");

}