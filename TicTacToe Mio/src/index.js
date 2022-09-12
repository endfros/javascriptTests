const btns = document.querySelector(".buttons");
const btn1 = document.querySelector(".button-1");
const btn2 = document.querySelector(".button-2");
const btn3 = document.querySelector(".button-3");
const btn4 = document.querySelector(".button-4");
const btn5 = document.querySelector(".button-5");
const btn6 = document.querySelector(".button-6");
const btn7 = document.querySelector(".button-7");
const btn8 = document.querySelector(".button-8");
const btn9 = document.querySelector(".button-9");
const reset = document.querySelector(".reset");
const state = document.querySelector(".state");
const play = document.querySelector(".play");
const select = document.querySelector(".select");
const selectValue = document.querySelector(".select-value");

state.style.display = "none";

let turn = play.addEventListener("click",function(){
    let turn = selectValue.value;
    state.style.display = "block";
    select.style.display = "none";
    play.style.display = "none";
    if(turn === "X"){
        state.innerText = "Turno de: X";
    } else {
        state.innerText = "Turno de: O";
    }
    return turn
})

console.log(turn);

let conditionsX = [
    [btn1.innerText === "X",btn2.innerText === "X",btn3.innerText === "X"],
    [btn4.innerText === "X",btn5.innerText === "X",btn6.innerText === "X"],
    [btn7.innerText === "X",btn8.innerText === "X",btn9.innerText === "X"],
    [btn1.innerText === "X",btn4.innerText === "X",btn7.innerText === "X"],
    [btn2.innerText === "X",btn5.innerText === "X",btn8.innerText === "X"],
    [btn3.innerText === "X",btn6.innerText === "X",btn9.innerText === "X"],
    [btn1.innerText === "X",btn5.innerText === "X",btn9.innerText === "X"],
    [btn3.innerText === "X",btn5.innerText === "X",btn7.innerText === "X"]
]

let conditionsO = [
    [btn1.innerText === "O",btn2.innerText === "O",btn3.innerText === "O"],
    [btn4.innerText === "O",btn5.innerText === "O",btn6.innerText === "O"],
    [btn7.innerText === "O",btn8.innerText === "O",btn9.innerText === "O"],
    [btn1.innerText === "O",btn4.innerText === "O",btn7.innerText === "O"],
    [btn2.innerText === "O",btn5.innerText === "O",btn8.innerText === "O"],
    [btn3.innerText === "O",btn6.innerText === "O",btn9.innerText === "O"],
    [btn1.innerText === "O",btn5.innerText === "O",btn9.innerText === "O"],
    [btn3.innerText === "O",btn5.innerText === "O",btn7.innerText === "O"]
]


let played = 0
let conditionX1 = btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X';
let conditionX2 = false;
let conditionX3 = false;
let conditionX4 = false;
let conditionX5 = false;
let conditionX6 = false;
let conditionX7 = false;
let conditionX8 = false;

console.log(played);

/* Condiciones
[
    [1,2,3]
    [4,5,6]
    [7,8,9]
    [1,4,7]
    [2,5,8]
    [3,6,9]
    [1,5,9]
    [3,5,7]
]
*/



btn1.addEventListener("click",function(){

    console.log(conditionX1)

    if(turn === "X"){
        btn1.innerText = "X";
        conditionsX[0][0] = true;
        conditionsO[0][0] = false;
        state.innerText = "Turno de: O"
        turn = "O";
        played += 1;
        console.log(conditionsX);
        btn1.disabled = true;

    } else {
        btn1.innerText = "O";
        conditionsO[0][0] = true;
        conditionsX[0][0] = false;
        state.innerText = "Turno de: X"
        turn = "X";
        played += 1;
        console.log(conditionsX);
        btn1.disabled = true;
    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }

    console.log(conditionX1);

});

btn2.addEventListener("click",function(){
    if(turn === "X"){
        btn2.innerText = "X";
        state.innerText = "Turno de: O"
        conditionsX[0][1] = true;
        conditionsO[0][1] = false;
        turn = "O";
        played += 1;
        console.log(conditionsX);
        btn2.disabled = true;
    } else {
        btn2.innerText = "O";
        state.innerText = "Turno de: X"
        conditionsO[0][1] = true;
        conditionsX[0][1] = false;
        turn = "X";
        played += 1;
        console.log(conditionsX);
        btn2.disabled = true;

    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    console.log(played);
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
});

btn3.addEventListener("click",function(){
    if(turn === "X"){
        btn3.innerText = "X";
        state.innerText = "Turno de: O"
        conditionsX[0][2] = true;
        conditionsO[0][2] = false;
        btn3.disabled = true;

        turn = "O";
        played += 1;
        console.log(conditionsX);
    } else {
        btn3.innerText = "O";
        state.innerText = "Turno de: X"
        conditionsO[0][2] = true;
        conditionsX[0][2] = false;
        btn3.disabled = true;

        turn = "X";
        played += 1;
        console.log(conditionsX);
    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    console.log(played);
});

btn4.addEventListener("click",function(){
    if(turn === "X"){
        btn4.innerText = "X";
        state.innerText = "Turno de: O";
        conditionsX[1][0] = true;
        conditionsO[1][0] = false;
        btn4.disabled = true;

        turn = "O";
        played += 1;
        console.log(conditionsX);
    } else {
        btn4.innerText = "O";
        state.innerText = "Turno de: X";
        conditionsO[1][0] = true;
        conditionsX[1][0] = false;
        btn4.disabled = true;

        turn = "X";
        played += 1;
        console.log(conditionsX);
    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    console.log(played);
});

btn5.addEventListener("click",function(){

    if(turn === "X"){
        btn5.innerText = "X";
        state.innerText = "Turno de: O";
        conditionsX[1][1] = true;
        conditionsO[1][1] = false;
        btn5.disabled = true;

        turn = "O";
        played += 1;
        console.log(conditionsX);
    } else {
        btn5.innerText = "O";
        state.innerText = "Turno de: X";
        conditionsO[1][1] = true;
        conditionsX[1][1] = false;
        btn5.disabled = true;

        turn = "X";
        played += 1;
        console.log(conditionsX);
    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    console.log(played);
});

btn6.addEventListener("click",function(){

    if(turn === "X"){
        btn6.innerText = "X";
        state.innerText = "Turno de: O";
        conditionsX[1][2] = true;
        conditionsO[1][2] = false;
        btn6.disabled = true;

        turn = "O";
        played += 1;
        console.log(conditionsX);
    } else {
        btn6.innerText = "O";
        state.innerText = "Turno de: X";
        conditionsO[1][2] = true;
        conditionsX[1][2] = false;
        btn6.disabled = true;

        turn = "X";
        played += 1;
        console.log(conditionsX);
    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    console.log(played);
});

btn7.addEventListener("click",function(){

    if(turn === "X"){
        btn7.innerText = "X";
        state.innerText = "Turno de: O"
        conditionsX[2][0] = true;
        conditionsO[2][0] = false;
        btn7.disabled = true;

        turn = "O";
        played += 1;
        console.log(conditionsX);
    } else {
        btn7.innerText = "O";
        state.innerText = "Turno de: X";
        conditionsO[2][0] = true;
        conditionsX[2][0] = false;
        btn7.disabled = true;

        turn = "X";
        played += 1;
        console.log(conditionsX);
    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    console.log(played);
});

btn8.addEventListener("click",function(){

    if(turn === "X"){
        btn8.innerText = "X";
        state.innerText = "Turno de: O";
        conditionsX[2][1] = true;
        conditionsO[2][1] = false;
        btn8.disabled = true;

        turn = "O";
        played += 1;
        console.log(conditionsX);
    } else {
        btn8.innerText = "O";
        state.innerText = "Turno de: X";
        conditionsO[2][1] = true;
        conditionsX[2][1] = false;
        btn8.disabled = true;

        turn = "X";
        played += 1;
        console.log(conditionsX);
    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    console.log(played);
});

btn9.addEventListener("click",function(){

    if(turn === "X"){
        btn9.innerText = "X";
        state.innerText = "Turno de: O";
        conditionsX[2][2] = true;
        conditionsO[2][2] = false;
        btn9.disabled = true;

        turn = "O";
        played += 1;
        console.log(conditionsX);
    } else {
        btn9.innerText = "O";
        state.innerText = "Turno de: X";
        conditionsO[2][2] = true;
        conditionsX[2][2] = false;
        btn9.disabled = true;

        turn = "X";
        played += 1;
        console.log(conditionsX);
    }
    if(played === 9){
        state.innerText = "GAME OVER";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    console.log(conditionX1);

});

reset.addEventListener("click",function(){
    btn1.innerHTML = "&nbsp";
    btn2.innerHTML = "&nbsp";
    btn3.innerHTML = "&nbsp";
    btn4.innerHTML = "&nbsp";
    btn5.innerHTML = "&nbsp";
    btn6.innerHTML = "&nbsp";
    btn7.innerHTML = "&nbsp";
    btn8.innerHTML = "&nbsp";
    btn9.innerHTML = "&nbsp";
    played = 0;
    state.style.display = "none";
    select.style.display = "block";
    play.style.display = "block";
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false; 
});



// let array1 = [
//     [btn1.innerText === "X",btn2.innerText === "X",btn3.innerText === "X"],
//     [btn4.innerText === "X",btn5.innerText === "X",btn6.innerText === "X"],
//     [btn7.innerText === "X",btn8.innerText === "X",btn9.innerText === "X"],
//     [btn1.innerText === "X",btn4.innerText === "X",btn7.innerText === "X"],
//     [btn2.innerText === "X",btn5.innerText === "X",btn8.innerText === "X"],
//     [btn3.innerText === "X",btn6.innerText === "X",btn9.innerText === "X"],
//     [btn1.innerText === "X",btn5.innerText === "X",btn9.innerText === "X"],
//     [btn3.innerText === "X",btn5.innerText === "X",btn7.innerText === "X"]
// ]

// for(let i = 0; i < array1.length; i++){

// }

// // const array1 = [true, true, true];

// let condition = array1[0].reduce((a,b) => a&&b)

// console.log(newArray);

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(array1.indexOf(element)));


