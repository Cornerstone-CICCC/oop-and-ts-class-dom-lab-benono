import { Component } from "../common/Component.js"
import { TodoItem } from "./TodoItem.js"

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.updateTodo = this.updateTodo.bind(this)
    this.props.todoContext.subscribe(this.updateTodo)
    this.todoUl = null
  }
  // since it is listner, it'll receive todo as a parameter
  updateTodo(todos) {
    this.state.todos = todos
    // reset
    this.todoUl.innerHTML = ""
    // render todo list
    this.state.todos.forEach((todo, idx) => {
      const todoItem = new TodoItem({
        item: todo,
        idx: idx,
        todoContext: this.props.todoContext,
      })
      this.todoUl.appendChild(todoItem.render())
    })
  }
  render() {
    const todoListElement = document.createElement("div")
    todoListElement.className = "todo-list"
    const todoUl = document.createElement("ul")
    todoUl.className = "todo-list-ul"
    todoListElement.appendChild(todoUl)
    this.todoUl = todoUl

    return todoListElement
  }
}
