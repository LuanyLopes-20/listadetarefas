const todoform = document.querySelector("#todoform");
const todoinput = document.querySelector("#todoinput");
const todolist = document.querySelector("#todolist");
const editinput = document.querySelector("#editinput");
const editfora = document.querySelector("#editform");
const canceleditbtn = document.querySelector("#canceleditbtn");

let oldinputvalue;

//funções
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML='<i class= "fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)
    
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML='<i class= "fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML='<i class= "fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todolist.appendChild(todo);

    todoinput.value = "";
    todoinput.focus();
};

const toggleForms = () =>{
    editfora.classList.toggle("hide");
    todoform.classList.toggle("hide");
    todolist.classList.toggle("hide");
};

const updateTodo=(text) =>{
    const todos= document.querySelectorAll(".todo")

    todos.forEach((todo) =>{

      let todoTitle = todo.querySelector("h3")
      if(todoTitle.innerText=== oldinputvalue){
        todoTitle.innerText=text
      }
    })
}
//eventos

todoform.addEventListener("submit", (e)=>{
    e.preventDefault()
    const InputValue = todoinput.value
    if(InputValue){
        saveTodo(InputValue);
    }
});

document.addEventListener("click" , (e) =>{
    const targetel = e.target;
    const parentel = targetel.closest("div");
    let todoTitle;

    if(parentel && parentel.querySelector("h3")){
       let todoTitle=parentel.querySelector("h3").innerText;
    }

    if(targetel.classList.contains("finish-todo")){
        
        parentel.classList.toggle("done");
    }
    
    if(targetel.classList.contains("remove-todo")){
        parentel.remove();
    }
    if(targetel.classList.contains("edit-todo")){
        toggleForms();

        editinput.value = todoTitle;
        oldinputvalue = todoTitle;
    }
})

canceleditbtn.addEventListener("click", (e)=>{
    e.preventDefault()

    toggleForms();
});

editfora.addEventListener("submit", (e) =>{
    e.preventDefault()

    const editinputvalue = editinput.value

    if(editinputvalue){
        updateTodo(editinputvalue)
    }
   toggleForms()
})


