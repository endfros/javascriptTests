const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

const number = [1, 2, 4];

let results = [];

for(let i = 0; i < array.length; i++){
    results[i] = array[i].every((element,i) => {
        return element === number[i]
    })
}

// console.log(results);

console.log(results.some((element) => {
    return element === true;
}))