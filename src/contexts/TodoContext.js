export class TodoContext {
  constructor() {
    this.todos = [] // this is where products will go
    this.listeners = [] // a collection of func that will listen to changes in cart
  }

  addItem(item) {
    this.todos.push(item)
    this.notifyListeners()
  }

  deleteItem(idx) {
    this.todos.splice(idx, 1)
    this.notifyListeners()
  }

  updateComplete(idx, complete) {
    this.todos[idx].complete = complete
    this.notifyListeners()
  }

  getTodo() {
    return this.todos
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.todos))
  }
}
