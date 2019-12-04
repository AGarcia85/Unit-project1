console.log("simon says")
//
// 1. Create varibles for start button, level counter, color ids and colors array
let start = document.querySelector(".start");
let level = document.querySelector(".level");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let colors = document.querySelectorAll(".colors")
//console.log(colors);
// 2. Create varibles for player turn, computer turn, correct input, colors flash, interval and win.
let playerTurn = []
let compTurn;
let correct;
let flash;
let intervalId;
let win;

