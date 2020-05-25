class Task {
  constructor (data) {
    this.title = data.title || ''
    this.checked = data.checked || false
    this.id = data.id || null
  }
}

export default Task
