//// select the lements
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


/// event listner
todoButton.addEventListener('click', todoadd);
todoList.addEventListener('click', tododelete);




/// function
function todoadd(event) {
    event.preventDefault();
    console.log('hello');
    const val = todoInput.value;
    if (val == "") {
        return;
    }
    //Create todo div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = val;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // checkbox button
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedButton);



    // delete or trash buton
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(trashButton);

    /// add tododiv
    todoList.appendChild(todoDiv);
    val = "";


}

/// delete function

function tododelete(event) {
    event.preventDefault();

}