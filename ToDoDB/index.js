import { saveTask, onGetTasks, deleteTask, getTasks } from "./firebase.js";

const button = document.querySelector('button');
const list = document.querySelector('.list');

window.addEventListener('DOMContentLoaded', async () => {
    // const querySnapshot = await getTasks()
    onGetTasks((querySnapshot) => {

        let html = '';

        querySnapshot.forEach(doc => {
            // const containerTask = document.createElement('div');
            // const item = document.createElement('li');
            // const erase = document.createElement('button');
            // const header = document.createElement('h2');
            // const content = document.createElement('p');

            console.log(doc.id)

            let title = doc.data().title;
            let desc = doc.data().description;

            html += `
            <li class="flex justify-between py-3">
                <div>
                    <h2 class="font-bold">${title}</h2>
                    <p class="break-words">${desc}</p>
                </div>
                <button class="delete h-6 pb-0.5 text-white rounded-full px-2 font-bold" id="${doc.id}">
                    -
                </button>
            </li>
            `


            // erase.innerText = '-';
            // erase.setAttribute('class',`delete h-6 pb-0.5 text-white rounded-full px-2 font-bold`);
            // erase.setAttribute('id',`${doc.id}`);
            // header.innerText = title;
            // content.innerText = desc;
            // header.setAttribute('class',"font-bold");
            // content.setAttribute('class',"break-words");
            // item.setAttribute('class',"flex justify-between py-3");
            // containerTask.appendChild(header);
            // containerTask.appendChild(content);

            // item.appendChild(containerTask);
            // item.appendChild(erase);
            // list.appendChild(item);

            // list.setAttribute('class',`item-container justify-between items-center`);
            // list.appendChild(containerTask);
        });

        list.innerHTML=html;
    
        const deleteButton = document.querySelectorAll('.delete');
    
        deleteButton.forEach(btn => {
            btn.addEventListener('click', (event) => {
                deleteTask(event.target.id);
            })
        })
    });
});

button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default event of an element
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    if(!title.value.trim() && !description.value.trim()){
        window.alert('No puedes ingresar una tarea en blanco!!');
    } else {
        saveTask(title.value,description.value);
        // const containerTask = document.createElement('div');
        // const item = document.createElement('li');
        // const erase = document.createElement('button');
        // const header = document.createElement('h2');
        // const content = document.createElement('p');

        // erase.innerText = '-';
        // erase.setAttribute('class',`delete h-6 pb-0.5 text-white rounded-full px-2 font-bold`);
        // erase.setAttribute('id',`${doc.id}`);
        // header.innerText = title.value;
        // content.innerText = description.value;
        // header.setAttribute('class',"font-bold");
        // content.setAttribute('class',"break-words");
        // item.setAttribute('class',"flex justify-between py-3");
        // containerTask.appendChild(header);
        // containerTask.appendChild(content);

        // item.appendChild(containerTask);
        // item.appendChild(erase);
        // list.appendChild(item);

        // list.setAttribute('class',`item-container justify-between items-center`);
    }
});





