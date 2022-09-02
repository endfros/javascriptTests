const date = new Date();

console.log(date);

//-------------------------------------

// Enjoy JavaScript with ES6 features :)

const diaHoy = () => {
    const date = new Date();

    let todaysYear = date.getFullYear();
    let todaysMonth = date.getMonth();
    let todaysDay = date.getDate();


    console.log(`${todaysYear} ${todaysMonth} ${todaysDay}`);
}

diaHoy();


