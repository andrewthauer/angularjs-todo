import { TodoListComponent, TodoListComponentName } from './todo-list.component'
import { TodoFormComponent, TodoFormComponentName } from './todo-form.component'
import { TodoComponent, TodoComponentName } from './todo.component'

angular
  .module('todoApp.todo', ['todoApp.core'])
  .component(TodoListComponentName, TodoListComponent)
  .component(TodoFormComponentName, TodoFormComponent)
  .component(TodoComponentName, TodoComponent)
