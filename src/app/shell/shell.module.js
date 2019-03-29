import { LayoutComponent, LayoutComponentName } from './layout.component'

angular
  .module('todoApp.shell', [])
  .component(LayoutComponentName, LayoutComponent)
