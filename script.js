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
//console.log(colors);
// 2. Create varibles for player turn, computer turn, correct input, colors flash, interval and win.
let playerTurn = []
let compTurn;
let level;
let correct;
let flash;
let intervalId;
let win;

// 3. Create event listener and function for color ids
red.addEventListener("click", function red1() {
    red.style.backgroundColor = "red";
    red.style.opacity = 1;
    red.style.border = "5px solid white";
    playerTurn.push(0);
    checkTurn();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300)
    }
});

yellow.addEventListener("click", function yellow1() {
    yellow.style.backgroundColor = "yellow";
    yellow.style.opacity = 1;
    yellow.style.border = "5px solid white";
    playerTurn.push(1);
    checkTurn();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300)
    }
});

green.addEventListener("click", function green1() {
    green.style.backgroundColor = "green";
    green.style.opacity = 1;
    green.style.border = "5px solid white";
    playerTurn.push(2);
    checkTurn();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300)
    }
});

blue.addEventListener("click", function blue1() {
    blue.style.backgroundColor = "blue";
    blue.style.opacity = 1;
    blue.style.border = "5px solid white";
    playerTurn.push(3);
    checkTurn();
    if (!win) {
        setTimeout(() => {
            clearColor();
        }, 300)
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
}
// 6. Create a check function to check player input
function checkTurn() {
    if (playerTurn[playerTurn.length] !== colors[playerTurn.length]) {
        flashColor();
        levelCounter.innerHTML = "YOU SUCK!";
        setTimeout(() => {
            clearColor();
        }, 800)
    }else if (level == playerTurn.length && !win) {
        level++;
        playerTurn = [];
        compTurn = true;
        flash = 0;
        levelCounter.innerHTML = level;
        intervalId = setInterval(roundTurn, 800);
    }else if (playerTurn.length == 30 && correct) {
        gameWon();
    }
}
// 7. Create a round function to run level difficulty and increment as player moves up
function roundTurn() {
    if (flash = level) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
    }else if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (colors[flash] == 0) red();
            if (colors[flash] == 1) yellow();
            if (colors[flash] == 2) green();
            if (colors[flash] == 3) blue();
            flash++
        }, 200)
    }
} 