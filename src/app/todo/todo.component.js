import template from './todo.component.html'

class TodoController {}

export const TodoComponentName = 'appTodo'

export const TodoComponent = {
  controller: TodoController,
  template,
  bindings: {
    item: '=',
  },
}

export default TodoComponent
