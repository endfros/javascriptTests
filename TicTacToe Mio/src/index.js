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

let turn = selectValue.value;
let played = 0

function disableBtn(){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    reset.disabled = true;
}

function enableBtn(){
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false;
}

function gameOver(){
    state.innerText = "GAME OVER";
    disableBtn();
    reset.disabled = false;
}

function updateState(button,turn){
    button.innerText = turn;
    button.disabled = true; 
}

function resetGame(){
    btn1.innerHTML = "&nbsp";
    btn2.innerHTML = "&nbsp";
    btn3.innerHTML = "&nbsp";
    btn4.innerHTML = "&nbsp";
    btn5.innerHTML = "&nbsp";
    btn6.innerHTML = "&nbsp";
    btn7.innerHTML = "&nbsp";
    btn8.innerHTML = "&nbsp";
    btn9.innerHTML = "&nbsp";
    state.style.display = "none";
    select.style.display = "block";
    play.style.display = "block";
    played = 0;
}

function winCondition(){
    if((btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X')||(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X')||(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X')||(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X')||(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X')||(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X')||(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X')){
        state.innerText = "WINNER: X";
        disableBtn();
        reset.disabled = false;
    }
    if((btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O')||(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O')||(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O')||(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O')||(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O')||(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O')||(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O')){
        state.innerText = "WINNER: O";
        disableBtn();
        reset.disabled = false;
    }
}

disableBtn();

play.addEventListener("click",function(){
    enableBtn();
    turn = selectValue.value;
    let selectTurn = selectValue.value;
    state.style.display = "block";
    select.style.display = "none";
    play.style.display = "none";
    console.log(turn);
    if(selectTurn === "X"){
        state.innerText = "Turno de: X";
    } else {
        state.innerText = "Turno de: O";
    }
})

btn1.addEventListener("click",function(){
    if(turn === "X"){
        updateState(btn1,turn);
        state.innerText = "Turno de: O"
        turn = "O";
        played += 1;

    } else {
        updateState(btn1,turn);
        state.innerText = "Turno de: X"
        turn = "X";
        played += 1;
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

btn2.addEventListener("click",function(){
    if(turn === "X"){
        updateState(btn2,turn);
        state.innerText = "Turno de: O"

        turn = "O";
        played += 1;
          
    } else {
        updateState(btn2,turn);
        state.innerText = "Turno de: X"
        turn = "X";
        played += 1;
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

btn3.addEventListener("click",function(){
    if(turn === "X"){
        updateState(btn3,turn);
        state.innerText = "Turno de: O"
        turn = "O";
        played += 1;
          
    } else {
        updateState(btn3,turn);
        state.innerText = "Turno de: X"
        turn = "X";
        played += 1;
          
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

btn4.addEventListener("click",function(){
    if(turn === "X"){
        updateState(btn4,turn);
        state.innerText = "Turno de: O";
        turn = "O";
        played += 1;
          
    } else {
        updateState(btn4,turn);
        state.innerText = "Turno de: X";
        turn = "X";
        played += 1;
          
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

btn5.addEventListener("click",function(){

    if(turn === "X"){
        updateState(btn5,turn);
        state.innerText = "Turno de: O";
        turn = "O";
        played += 1;
          
    } else {
        updateState(btn5,turn);
        state.innerText = "Turno de: X";
        turn = "X";
        played += 1;
          
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

btn6.addEventListener("click",function(){
    if(turn === "X"){
        updateState(btn6,turn);
        state.innerText = "Turno de: O";
        turn = "O";
        played += 1;
          
    } else {
        updateState(btn6,turn);
        state.innerText = "Turno de: X";
        turn = "X";
        played += 1;
          
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

btn7.addEventListener("click",function(){
    if(turn === "X"){
        updateState(btn7,turn);
        state.innerText = "Turno de: O"
        turn = "O";
        played += 1;
          
    } else {
        updateState(btn7,turn);
        state.innerText = "Turno de: X";
        turn = "X";
        played += 1;
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

btn8.addEventListener("click",function(){
    if(turn === "X"){
        updateState(btn8,turn);
        state.innerText = "Turno de: O";
        turn = "O";
        played += 1;
          
    } else {
        updateState(btn8,turn);
        state.innerText = "Turno de: X";
        turn = "X";
        played += 1;
          
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

btn9.addEventListener("click",function(){
    if(turn === "X"){
        updateState(btn9,turn);
        state.innerText = "Turno de: O";
        turn = "O";
        played += 1;
          
    } else {
        updateState(btn9,turn);
        state.innerText = "Turno de: X";
        turn = "X";
        played += 1;
          
    }
    if(played === 9){
        gameOver();
    }
    winCondition();
});

reset.addEventListener("click",function(){
    resetGame();
    disableBtn();
});


// const conditions = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [1,5,9],
//     [3,5,7]
// ];

// const number = [1, 2, 3];

// let results = [];

// for(let i = 0; i < array.length; i++){
//     results[i] = array[i].every((element,i) => {
//         return element === number[i]
//     })
// }

// // console.log(results);

// console.log(results.some((element) => {
//     return element === true;
// }))




