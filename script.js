console.log("simon says")
//
// 1. Create varibles for start button, level counter, color ids and colors array
let start = document.querySelector("#start");
let levelCounter = document.querySelector(".level");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let colors = document.querySelectorAll(".colors")
let colorOrder = (colors);
console.log(colorOrder);
// 2. Create varibles for player turn, computer turn, correct input, colors flash, interval and win.
let playerOrder = []
let compTurn;
let level;
let correct;
let flash;
let intervalId;
let win;

// 3. Create event listener and function for color ids
function red1() {
    red.style.backgroundColor = "red";
    red.style.border = "5px solid white";
}
red.addEventListener("click", function() { 
    playerTurn.push(0);
    //checkTurn();
    red1();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 500);
    }
});

function yellow1() {
    yellow.style.backgroundColor = "yellow";
    yellow.style.border = "5px solid white";
}
yellow.addEventListener("click", function() {
    playerTurn.push(1);
    //checkTurn();
    yellow1();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 500);
    }
});

function green1() {
    green.style.backgroundColor = "green";
    green.style.border = "5px solid white";
}
green.addEventListener("click", function() {
    playerTurn.push(2);
    //checkTurn();
    green1();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 500);
    }
});

function blue1() {
    blue.style.backgroundColor = "blue";
    blue.style.border = "5px solid white";
}
blue.addEventListener("click", function() {
    playerTurn.push(3);
    //checkTurn();
    blue1();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 500);
    }
});
// 4. Create a clear color function to allow colors to return back to normal after being clicked
function clearColor() {
    red.style.backgroundColor = "darkred";
    red.style.border = "5px solid black";
    yellow.style.backgroundColor = "rgb(155, 155, 3)";
    yellow.style.border = "5px solid black";
    green.style.backgroundColor = "darkgreen";
    green.style.border = "5px solid black";
    blue.style.backgroundColor = "darkblue";
    blue.style.border = "5px solid black";
};
// 5. Create a flash color function that will flash all colors at the same time to tell you you got it wrong
function flashColor() {
    red.style.backgroundColor = "red";
    red.style.border = "5px solid white";
    yellow.style.backgroundColor = "yellow";
    yellow.style.border = "5px solid white";
    green.style.backgroundColor = "green";
    green.style.border = "5px solid white";
    blue.style.backgroundColor = "blue";
    blue.style.border = "5px solid white";
};

