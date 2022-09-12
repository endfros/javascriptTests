let array1 = [
    [btn1.innerText === "X",btn2.innerText === "X",btn3.innerText === "X"],
    [btn4.innerText === "X",btn5.innerText === "X",btn6.innerText === "X"],
    [btn7.innerText === "X",btn8.innerText === "X",btn9.innerText === "X"],
    [btn1.innerText === "X",btn4.innerText === "X",btn7.innerText === "X"],
    [btn2.innerText === "X",btn5.innerText === "X",btn8.innerText === "X"],
    [btn3.innerText === "X",btn6.innerText === "X",btn9.innerText === "X"],
    [btn1.innerText === "X",btn5.innerText === "X",btn9.innerText === "X"],
    [btn3.innerText === "X",btn5.innerText === "X",btn7.innerText === "X"]
]

for(element of array1){
    console.log(array1.indexOf(element))
}