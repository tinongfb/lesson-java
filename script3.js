var user = {
    name: "Jane",
    age: 20,
    hobby: "game",
    isMarried: false,
    spells: ["bibidi", "bobidi", "boo"],
    shout: function() {
        console.log("AAAHHH!");
    }
};

var list = ["apple", "banana", "orange"];

var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess"
        password: "123"
    }
];

// empty object
user2 = {};

// empty list
list2 = [];

// to get the spells, type the following:
// user.spells

// to get a specific spell, type the following:
// user.spells[x], x being the index representer (in this case, 0 1 or 2)
// e.g. user.spells[1];

// to get andy's password, type the following:
// list[0].password;

// to get the function, type the following:
// user.shout()
// NOTE: YOU CAN HAVE FUNCTION INSIDE OBJECT - called "method"
// shout is a method of user
// as is list.pop(), pop is a method of list
// e.g. in console.log, log is a method of console