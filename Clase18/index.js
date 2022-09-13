
const button = document.querySelector('button');
const close = document.querySelector('.close');
const addTask = document.querySelector('.submit-task');


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

    let item = document.createElement('li');

    item.innerText = taskContent;
    item.setAttribute('class',"py-3");

    list.appendChild(item);

});

