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
let colorOrder = [];
// 2. Create varibles for player turn, computer turn, colors flash, interval and win.
let playerOrder = [];
let compTurn;
let compOrder = [];
let level;
let flash;
let intervalId;
let win;

// 3. Add event listener and create function to start game when start button is click
start.addEventListener("click", function() {
    start.style.backgroundColor = "green"
    gameStart();
});
function gameStart() {
    levelCounter.innerHTML = 1
    win == false;
    playerOrder = [];
    compOrder= [];
    flash = 0;
    intervalId = 0;
    level = 1;
    colorOrder = []
    for (let i = 0; i < 20; i++) {
        colorOrder.push(Math.floor(Math.random() * 4));
    }
    console.log(colorOrder);
    compTurn = true;
    intervalId = setInterval(rounds, 800);
};
// Create a function to track the computer order with a for loop with colorOrder.length
// function compList() {
//     for (let j = 0; j < intervalId; j++) {
//         compOrder.push(colorOrder[j]);
//         console.log(`J: ${j}`)
//         console.log(`intervalID: ${intervalId}`)
//         console.log("Comp list did a push")
//     }

// }

// 4. Create function to play rounds
function rounds() {
    if (flash == level) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
    }else if (compTurn == true) {
        clearColor();
        setTimeout(function() {
            if (colorOrder[flash] == 0) red1();
            if (colorOrder[flash] == 1) yellow1();
            if (colorOrder[flash] == 2) green1();
            if (colorOrder[flash] == 3) blue1();
            flash++;
            compOrder.push(colorOrder[flash]);
        }, 500);
    }; 
};

// 5. Create a check function to check player input against computer input.
function checkTurn() {
    // added console.log for both playerorder and colors played to check for input
    console.log(`playerOrder: ${playerOrder}`);
    console.log(`compOrder: ${compOrder}`);
    // add win argument for when player reaches last level
    if (playerOrder.length == 20) {
        flashColor();
        levelCounter.innerHTML = "Winner!";
        win = true;
    // add an if statement for when player clicks incorrect color 
    }else if (playerOrder[playerOrder.length - 1] !== colorOrder[playerOrder.length - 1]) {
        flashColor();
        levelCounter.innerHTML = "Try Again!";
        start.style.backgroundColor = "red"
        setTimeout(() => {
            clearColor();
		    compTurn = true;
		    flash = 0;
            playerOrder = [];
            compOrder = [];
		    correct = true;
        }, 800);
    // add an if statement for when player gets right colors and needs to move to next
    }else if (level === playerOrder.length && !win) {
        level++;
        playerOrder = [];
        compOrder = [];
        compTurn = true;
        flash = 0;
        levelCounter.innerHTML = level;
        intervalId = setInterval(rounds, 800);
    }
};

// 6. Create event listener and function for color ids
function red1() {
    red.style.backgroundColor = "red";
    red.style.border = "5px solid white";
}
red.addEventListener("click", function() { 
    playerOrder.push(0);
    checkTurn();
    red1();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
    }
});

function yellow1() {
    yellow.style.backgroundColor = "yellow";
    yellow.style.border = "5px solid white";
}
yellow.addEventListener("click", function() {
    playerOrder.push(1);
    checkTurn();
    yellow1();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
    }
});

function green1() {
    green.style.backgroundColor = "green";
    green.style.border = "5px solid white";
}
green.addEventListener("click", function() {
    playerOrder.push(2);
    checkTurn();
    green1();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
    }
});

function blue1() {
    blue.style.backgroundColor = "blue";
    blue.style.border = "5px solid white";
}
blue.addEventListener("click", function() {
    playerOrder.push(3);
    checkTurn();
    blue1();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
    }
});
// 7. Create a clear color function to allow colors to return back to normal after being clicked
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
// 8. Create a flash color function that will flash all colors at the same time to tell you you got it wrong
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
