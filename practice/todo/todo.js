const inputBox = document.querySelector('.input');
const addBtn = document.querySelector('.add');
const todolist = document.querySelector('.todolist');
let edittodo = null;
const addtodo = ()=>{
const inputText = inputBox.value.trim();
if(inputText.length <= 0){
    alert("You must write something in you to do ");
    return;
}else{
if(addBtn.value === 'Edit'){
    console.log(edittodo.target.previousElementSibling.innerHTML);
    edittodo.target.previousElementSibling.innerHTML = inputText;
    inputBox.value = '';
    addBtn.value = 'Add';
    editlocalstorage(inputText);
}else{
const li = document.createElement('li');
const p = document.createElement('p');
p.innerHTML= inputText;
li.appendChild(p);

todolist.appendChild(li);
inputBox.value = "";

const editBtn = document.createElement('button');
editBtn.innerText = "Edit";
editBtn.classList.add('editBtn');
li.appendChild(editBtn);

const deleteBtn = document.createElement('button');
deleteBtn.innerText = "Remove";
deleteBtn.classList.add('delBtn');
li.appendChild(deleteBtn);
}

}
save(inputText);
}

const updateTodo = (e)=>{
if(e.target.innerHTML === 'Remove'){
    todolist.removeChild(e.target.parentElement);
    console.log(e.target.parentElement);
    removeFromlocalstorage(e.target.parentElement);
}else if (e.target.innerHTML === 'Edit'){
   inputBox.value = e.target.previousElementSibling.innerHTML;
   addBtn.value = 'Edit';
   edittodo = e;
  //this also works
    // removeFromlocalstorage(e.target.parentElement);
  
}
}

const save = (todo)=>{
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos' , JSON.stringify(todos))
}

const gettodo = () => {
     let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{ 
        todos = JSON.parse(localStorage.getItem('todos'))
       todos.forEach(todo => {
         const li = document.createElement('li');
const p = document.createElement('p');
p.innerHTML= todo;
li.appendChild(p);

todolist.appendChild(li);
inputBox.value = "";

const editBtn = document.createElement('button');
editBtn.innerText = "Edit";
editBtn.classList.add('editBtn');
li.appendChild(editBtn);

const deleteBtn = document.createElement('button');
deleteBtn.innerText = "Remove";
deleteBtn.classList.add('delBtn');
li.appendChild(deleteBtn);
       });
    }
}

const removeFromlocalstorage = (todo)=> {
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    let todoText = todo.children[0].innerText;
    let todoindex = todos.indexOf(todoText);
    todos.splice(todoindex,1);
    localStorage.setItem('todos' , JSON.stringify(todos));
}

const editlocalstorage = (todo)=>{
    let todos = JSON.parse(localStorage.getItem('todos'));
    let todoindex = todos.indexOf(todo);
    todos[todoindex] = inputBox.value;
    localStorage.setItem('todos' , JSON.stringify(todos))
}
document.addEventListener('DOMContentLoaded' , gettodo)
addBtn.addEventListener('click' , addtodo );
todolist.addEventListener('click', updateTodo)
