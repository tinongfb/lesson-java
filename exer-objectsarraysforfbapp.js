// Exercise: OBJECTS AND ARRAYS FOR FACEBOOK APP
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var sample = {
    username: "tin",
    password: "123",
};

// 2. Create an array which contains the object you have made above and name the arry "database"

var database = [
    {
        username: "tin1",
        password: "abc",
    },
    {
        username: "tin2",
        password: "xyz",
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
    {
        username: "Alphen",
        timeline: "I can't beat the level 70 dragon ^^;"
    },
    {
        username: "Shionne",
        timeline: "Time to practice for the perfect pancake."
    },
    {
        username: "kisara",
        timeline: "dropping by the grocery, does anybody have request for supper?"
    }
];

// exercise: making a facebook app

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);