class AppRoutes {
  constructor($stateProvider) {
    const homeState = {
      name: 'home',
      url: '/home',
      template: '<h2>Home</h2>',
    }

    const itemsState = {
      name: 'items',
      url: '/items',
      component: 'appTodoList',
    }

    const itemState = {
      name: 'item',
      url: '/items/{itemId}',
      component: 'appTodoForm',
      resolve: {
        item: (apiService, $stateParams) =>
          apiService.getTodo($stateParams.itemId),
      },
    }

    $stateProvider.state(homeState)
    $stateProvider.state(itemsState)
    $stateProvider.state(itemState)
  }
}

export default AppRoutes
