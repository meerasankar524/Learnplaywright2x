// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are not an adult.");
// }

// app.vwo.com -> viewer , editor or admin ->

let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Admin can do all the things. ");
    } else if (userRole === "editor") {
        console.log("Editor can edit the content. ");
    } else if (userRole === "viewer") {
        console.log("Viewer can only view the content. ");
    }
    else {
        console.log("No idea who you are or what you want. ");
    }
}
else {
    console.log("you are not loggedin");
}
