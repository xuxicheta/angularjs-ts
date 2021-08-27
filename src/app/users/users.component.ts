import angular from 'angular';

angular.module('usersModule').component('users', {
  template: require('./users.html'),
  controllerAs: 'vm',
  controller: function UsersController(
    $http
  ) {
    $http.get('assets/data.json').then((response) => {
      this.users = response.data;
    });

    const vm = this;
    this.users = [
      // {
      //   name: 'Vasya',
      //   role: 'boss',
      // },
      // {
      //   name: 'Kolya',
      //   role: 'slave',
      // },
      // {
      //   name: 'Sasha',
      //   role: 'whore',
      // },
      // {
      //   name: 'Pasha',
      //   role: 'pig',
      // },
    ];

    this.orderProp = 'role';
  }
})
