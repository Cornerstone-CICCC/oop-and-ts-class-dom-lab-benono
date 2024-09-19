import { Component } from "../common/Component.js"

export class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
    this.handleInComplete = this.handleInComplete.bind(this)
  }
  handleDelete() {
    this.props.todoContext.deleteItem(this.props.idx)
  }

  handleComplete() {
    this.props.todoContext.updateComplete(this.props.idx, true)
  }
  handleInComplete() {
    this.props.todoContext.updateComplete(this.props.idx, false)
  }
  render() {
    const todoElement = document.createElement("li")
    todoElement.className = `${this.props.item.complete ? "completed" : ""}`
    todoElement.innerHTML = `
    ${this.props.item.complete ? "<span>" : ""}${this.props.item.text}${
      this.props.item.complete ? "</span>" : ""
    }
    `

    const buttonArea = document.createElement("div")
    const toggleCompleteBtn = document.createElement("button")
    if (this.props.item.complete) {
      toggleCompleteBtn.innerText = "Mark Incomplete"
      toggleCompleteBtn.addEventListener("click", this.handleInComplete)
    } else {
      toggleCompleteBtn.innerText = "Mark Complete"
      toggleCompleteBtn.addEventListener("click", this.handleComplete)
    }

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "del-btn"
    deleteBtn.innerText = "Delete"

    buttonArea.appendChild(toggleCompleteBtn)
    buttonArea.appendChild(deleteBtn)

    buttonArea
      .querySelector(".del-btn")
      .addEventListener("click", this.handleDelete)
    todoElement.appendChild(buttonArea)

    return todoElement
  }
}
