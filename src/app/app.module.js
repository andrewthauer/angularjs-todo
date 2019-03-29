import '@uirouter/angularjs'

import './shared/shared.module'
import './core/core.module'
import './todo/todo.module'

import Routes from './app.routes'
import { AppComponent, AppComponentName } from './app.component'

angular
  .module('todoApp', [
    'ui.router',
    'todoApp.shared',
    'todoApp.core',
    'todoApp.todo',
  ])
  .config(Routes)
  .component(AppComponentName, AppComponent)
