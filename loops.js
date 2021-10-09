var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

// how to add ! too all in the list

// for (var i=0; i < todos.length; i++) {
    // console.log(todos[i] + "!");
// }

for (var i=0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

// remove something you already did

// var todosLength = todos.length;
// for (var i=0; i < todosLength; i++) {
//     todos.pop();
// }

// while loop:

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }

var counterOne = 10;
while (counterOne > 0) {
    console.log("while", counterOne);
    counterOne--;
}
// infinite loop - not ending open ended #

// do while loop:
var counterTwo = 10
do {
    console.log("do while", counterTwo);
    counterTwo--;
} while (counterTwo > 0);