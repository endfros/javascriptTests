// let parrafo = document.getElementsByClassName('p2');

// console.log(parrafo);

// let div = document.getElementById('div2');

// console.log(div);

const body = document.querySelector('body');

// const element = document.createElement('h1');

// element.style.backgroundColor = 'red';
// element.style.color = 'white';
// element.classList.add('title');
// element.classList.add('title-black');
// element.classList.add('title-xl');

// body.appendChild(element);
// div.appendChild(element);



// function generarListaDesordenada(){

//     const body = document.querySelector('body');

//     const ul = document.createElement('ul');
//     const li1 = document.createElement('li');
//     const li2 = document.createElement('li');
//     const li3 = document.createElement('li');

//     li1.appendChild(document.createElement('span'));
//     li2.appendChild(document.createElement('span'));
//     li3.appendChild(document.createElement('span'));
//     ul.appendChild(li1);
//     ul.appendChild(li2);
//     ul.appendChild(li3);

//     body.appendChild(ul);
// }

// generarListaDesordenada();

// function generarTarjCredito(id,texto){
//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');

//     p.innerText=texto;
//     p.innerText+='1241241241241';
//     p.id = id

//     body.appendChild(p);
// }

// generarTarjCredito('coasa','hola que tal');

// Elementos dinamicos


function generateToDoList(text,numberOfItems){
    const div = document.createElement('div');
    const divContainter = document.createElement('div')
    const h1 = document.createElement('h1');

    divContainter.className = 'flex flex-col items-center'

    div.className = 'flex flex-col max-w-lg w-1/4 items-center rounded-lg m-8 p-1 py-4 list-background shadow-2xl'

    // h1.className = 'justify-center'

    h1.innerText = 'To Do List';

    h1.className = 'text-3xl p-2 font-serif text-slate-800'

    div.appendChild(h1);

    divContainter.appendChild(div);

    body.appendChild(divContainter);

    for(let i = 0; i<numberOfItems; i++){   
        const ul = document.createElement('ul');
        const li1 = document.createElement('li');
        // generateListItem(`${nombre} ${i}`);
        ul.className = 'font-serif list-disc list-inside text-slate-800'

        li1.className = 'item-hover bg-slate-200 border-solid rounded-md m-1 p-1 px-5 shadow-xl'

        li1.innerText=`${text} - ${i}`;
        ul.appendChild(li1);
        div.appendChild(ul);
    }
}

generateToDoList('Tarea', 14);

generateToDoList('Prueba', 3);

generateToDoList('Fati', 100);


//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');

//     p.innerText=texto;
//     p.innerText+='1241241241241';
//     p.id = id

//     body.appendChild(p);

// function generateCreditCard(id,numeroTarjeta, titulo){
//     const template = "<div> <h1></h1> <img></img> <p></p> </div>";
//     body.innerHTML(template);
// }

// generateCreditCard(12,12,'BBVA');