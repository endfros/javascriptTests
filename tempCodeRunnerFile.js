function fibonacci(elements){
    let n = [0,1];
    for (let i = 2; i <= elements; i++){
        n.push(n[i-1]+n[i-2]);
    }
    return n;
}
console.log(fibonacci(56));