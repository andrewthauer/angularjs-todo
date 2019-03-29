import template from './todo-form.component.html'
// import './todo-form.component.scss'

class TodoFormController {}

export const TodoFormComponentName = 'appTodoForm'

export const TodoFormComponent = {
  controller: TodoFormController,
  template,
  bindings: {
    item: '=',
  },
}

export default TodoFormComponent
