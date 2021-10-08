const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo=>{
        return toDo.id !== parseInt(li.id);
    });
    li.remove();
    saveTodos();
}

function paintToDo(newTodoObj) {
    const newLi = document.createElement("li");
    newLi.id = newTodoObj.id;
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodoObj.text;
    const newButton = document.createElement("button");
    newButton.innerText = "❌";
    newButton.addEventListener("click", deleteTodo);
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);
    toDoList.appendChild(newLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const localStorageToDos = localStorage.getItem(TODOS_KEY);

if(localStorageToDos) {
    const parsedToDos = JSON.parse(localStorageToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}