
const button = document.querySelector('button');
const close = document.querySelector('.close');
const addTask = document.querySelector('.submit-task');

let tasks = 0;
console.log(tasks)

button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default event of an element
    event.stopPropagation(); // Stop the propagation, only listens one time
    const email = document.querySelector('[type="email"]').value;
    const pass = document.querySelector('[type="password"]').value;   

    console.log(email,pass);

    if(email === 'rodri@kodemia.mx' && pass === 'admin'){
        const list = document.querySelector('#list');
        const login = document.querySelector('#login');

        login.style.display = "none";
        list.style.display = "block";
        
        console.log("popo")
    } else {
        window.alert('Sus credenciales no son válidas');
    }
 });

close.addEventListener('click',() => {
    const list = document.querySelector('#list');
    const login = document.querySelector('#login');
    let email = document.querySelector('[type="email"]');
    let pass = document.querySelector('[type="password"]');   

    email.value = "";
    pass.value = "";

    login.style.display = "block";
    list.style.display = "none";  
});

addTask.addEventListener('click',() => {
    let list = document.querySelector('.list');
    let taskContent = document.querySelector('.task').value;

    if(!taskContent.trim()){
        window.alert('No puedes ingresar una tarea en blanco!!');
    } else {
        let item = document.createElement('li');
        let erase = document.createElement('button');
        let containerTask = document.createElement('div');
        let itemContainer = document.querySelector('.item-container');
        erase.innerText = '-';
        erase.setAttribute('class',`delete close h-6 pb-0.5 text-white rounded-full px-2 font-bold`);
        item.innerText = taskContent;
        item.setAttribute('class',"py-3");
        tasks += 1;
        console.log(tasks);
        containerTask.appendChild(item);
        containerTask.appendChild(erase);

        containerTask.setAttribute('class',`item-container${tasks} flex justify-between items-center`);
        
        list.appendChild(containerTask);
    }
});

let deleteTask = document.querySelectorAll(`.delete`);

deleteTask.addEventListener('click', () => {
    let itemContainer = document.querySelector('.item-container');
    itemContainer.remove();
    console.log('working?')
});
    





