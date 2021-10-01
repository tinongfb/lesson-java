console.log("wow")

function sayHello() {
    console.log("hello");
}
sayHello();

var sayBye = function() {
    console.log("bye");
}
sayBye();

// // ---------------------------------
function sing(song){
    console.log(song);
    
}

sing("itsumo kimi ito");
sing("machi tsuzuketa");
sing("kisetsu wa");

// // ----------------------------------
function multiply(a, b) {
    if (a > 10 || b > 10) {
    return "that's too hard";
    } else {
    return a * b;
    }    
    
}

multiply(5, 10);

// ------------------------------------
function multiply(a, b) {
       return a * b;
}

var total = multiply(4,5);
// alert(multiply(4,5));


// ------------------------------------

function checkDriverAge() {
    var age = prompt("how old are you");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
checkDriverAge();

// -----------------------
var checkDriverAge2 = function() {
    var age = prompt("how old are you");
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}