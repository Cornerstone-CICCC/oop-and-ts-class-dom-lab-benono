import { Component } from "../common/Component.js"

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    // If don't bind this func, this in handleAddTodo will be btn element
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }
  handleAddTodo() {
    const text = document.querySelector("#todo-input").value
    const todo = {
      text: text,
      complete: false,
    }
    // valid
    if (!todo.text) {
      alert("Plese enter task detail!")
      return
    }
    this.props.todoContext.addItem(todo)
    // clear val
    document.querySelector("#todo-input").value = ""
  }
  render() {
    const addElement = document.createElement("div")
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    addElement
      .querySelector("#todo-add-btn")
      .addEventListener("click", this.handleAddTodo)
    return addElement
  }
}
