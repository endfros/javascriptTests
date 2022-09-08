let listKoders = ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global

function removeKoder(koder){
    let newArray = listKoders.filter(element => element !== koder);
    return console.log(newArray)
}

removeKoder('Manu');