const BASE_URL = 'http://localhost:3000'

export default class ApiService {
  constructor($http) {
    'ngInject'
    this.http = $http
  }

  getTodos() {
    return this.http({
      method: 'GET',
      url: `${BASE_URL}/items`,
    }).then((r) => r.data, (r) => r)
  }

  getTodo(id) {
    return this.http({
      method: 'GET',
      url: `${BASE_URL}/items/${id}`,
    }).then((r) => r.data, (r) => r)
  }
}
