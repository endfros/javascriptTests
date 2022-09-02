import * as calculadora from "./calculadora.js"


const input1 = document.querySelector('.input1');



// const input2 = document.querySelector('.input2');

let sum = document.querySelector(".suma");
let sub = document.querySelector(".resta");
let mult = document.querySelector(".multiplicacion");
let div = document.querySelector(".division");
let clr = document.querySelector(".clear");
let eq = document.querySelector(".equal");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let dot = document.querySelector(".dot");

let resultado = document.querySelector(".resultado")

let operation;
let num1;
let num2;
let result = 0;

one.addEventListener("click",function(){
    input1.value += "1"
});
two.addEventListener("click",function(){
    input1.value += "2"
    console.log("cuantas veces me haz clickeado")
});
three.addEventListener("click",function(){
    input1.value += "3"
    console.log("cuantas veces me haz clickeado")
});
four.addEventListener("click",function(){
    input1.value += "4"
    console.log("cuantas veces me haz clickeado")
});
five.addEventListener("click",function(){
    input1.value += "5"
    console.log("cuantas veces me haz clickeado")
});
six.addEventListener("click",function(){
    input1.value += "6"
    console.log("cuantas veces me haz clickeado")
});
seven.addEventListener("click",function(){
    input1.value += "7"
    console.log("cuantas veces me haz clickeado")
});
eight.addEventListener("click",function(){
    input1.value += "8"
    console.log("cuantas veces me haz clickeado")
});
nine.addEventListener("click",function(){
    input1.value += "9"
    console.log("cuantas veces me haz clickeado")
});
zero.addEventListener("click",function(){
    input1.value += "0"
    console.log("cuantas veces me haz clickeado")
});
dot.addEventListener("click",function(){
    input1.value += "."
    console.log("cuantas veces me haz clickeado")
});


clr.addEventListener("click",function(){
    operation = "";
    result = "";
    num1 = 0;
    num2 = 0;
    input1.value = "";
    resultado.innerText = "----------------";
});

sum.addEventListener("click",function(){
    operation = "suma";
    num1 = input1.value;
    input1.value = "";
    console.log(operation);
    console.log(num1);
    return operation
});
sub.addEventListener("click",function(){
    operation = "resta";
    num1 = input1.value;
    input1.value = "";
    console.log(operation);
    console.log(num1);
    return operation
});
mult.addEventListener("click",function(){
    operation = "multiplicacion";
    num1 = input1.value;
    input1.value = "";
    console.log(operation);
    console.log(num1);
    return operation
});
div.addEventListener("click",function(){
    operation = "division";
    num1 = input1.value;
    input1.value = "";
    console.log(operation);
    console.log(num1);
    return operation
});



eq.addEventListener("click",function(){
    num2 = input1.value;
    if(operation === "suma"){
        console.log(num1,num2);
        result = calculadora.suma(Number(num1),Number(num2));
        console.log(result);
        input1.value = result;
    }
    if(operation === "resta"){
        console.log(num1,num2);
        result = calculadora.resta(Number(num1),Number(num2));
        console.log(result);
        input1.value = result;
    }
    if(operation === "multiplicacion"){
        console.log(num1,num2);
        result = calculadora.multiplicacion(Number(num1),Number(num2));
        console.log(result);
        input1.value = result;
    }
    if(operation === "division"){
        console.log(num1,num2);
        result = calculadora.division(Number(num1),Number(num2));
        console.log(result);
        input1.value = result;
    }
});

// sum.addEventListener("click",function(){calculator(input1,input2,calculadora.suma)})
// sub.addEventListener("click",function(){calculator(input1,input2,calculadora.resta)})
// mult.addEventListener("click",function(){calculator(input1,input2,calculadora.multiplicacion)})
// div.addEventListener("click",function(){calculator(input1,input2,calculadora.division)})


