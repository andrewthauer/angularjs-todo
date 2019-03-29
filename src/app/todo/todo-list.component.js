import template from './todo-list.component.html'
import './todo-list.component.scss'

class TodoListController {
  constructor($scope, apiService) {
    apiService.getTodos().then((data) => {
      this.items = data
    })
  }
}

export const TodoListComponentName = 'appTodoList'

export const TodoListComponent = {
  controller: TodoListController,
  template,
  binding: {
    items: '=',
  },
}

export default TodoListComponent
