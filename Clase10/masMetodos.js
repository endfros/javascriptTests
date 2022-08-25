const frutas = ['banana','manzana','fresa'];

function callback(itemActual){
    return (itemActual == 'banana' || itemActual == 'fresa');
}

// frutas.filter(callback);
console.log(frutas.filter(callback))

const users = [
    {username: 'aldo', password: 'pass*2022'},
    {username: 'rodri', password: 'pass*2023'}
];

let resultado = users.filter((user)=> {
    return user.password.includes('2023');
})

console.log(resultado)

