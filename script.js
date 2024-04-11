const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector("#todoList")
const editForm = document.querySelector("#editForm")
const editInput = document.querySelector("#editInput")
const cancelEditBtn = document.querySelector("#cancelEditBtn")

let oldInputValue

const saveTodo = (text) => {

  const todo = document.createElement("div")
  todo.classList.add("card")

  const todoTitle = document.createElement("p")
  todoTitle.innerText = text
  todo.appendChild(todoTitle)
  
  const editBtn = document.createElement("button")
  editBtn.classList.add("editTodo")
  editBtn.innerHTML = '<ion-icon name="cut-outline"></ion-icon>'
  todo.appendChild(editBtn)

  todoList.appendChild(todo)

  const removeBtn = document.createElement("button")
  removeBtn.classList.add("removeTodo")
  removeBtn.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon>'
  todo.appendChild(removeBtn)

  todoList.appendChild(todo)

  todoInput.value = ""
  todoInput.focus()
}


const toggleForms = () => {
  modal.style.display = "block"
  editForm.classList.toggle("hide")
  todoForm.classList.toggle("hide")
}

const updateTodo = (text) => {

  const todos = document.querySelectorAll(".card")

  todos.forEach((todo) => {

    let todoTitle = todo.querySelector("p")

    console.log(todoTitle, text)

    if(todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text
    }
  })
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputValue = todoInput.value

  if(inputValue) {
    saveTodo(inputValue)
  }
})

document.addEventListener("click", (e) => {
  const targetE1 = e.target
  const parentE1 = targetE1.closest("div")
  let todoTitle

  if(parentE1 && parentE1.querySelector("p")) {
    todoTitle = parentE1.querySelector("p").innerText
  }

  if(targetE1.classList.contains("editTodo")) {
    toggleForms()

    editInput.value = todoTitle
    oldInputValue = todoTitle
  }

  if (targetE1.classList.contains("removeTodo")) {
    parentE1.remove()
  }
})

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault()

  toggleForms()
})

editForm.addEventListener("submit", (e) => {

  e.preventDefault()

  const editInputValue = editInput.value

  if(editInputValue) {
    updateTodo(editInputValue)
  }

  toggleForms()
})
























// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}