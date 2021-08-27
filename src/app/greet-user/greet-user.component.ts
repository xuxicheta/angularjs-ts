import angular from 'angular';
import './greet-user.module';

angular
  .module('greetUserModule')
  .component('greetUser', {
    template: require('./greet-user.component.html'),
    controller: function GetUserController() {
      const vm = this;
      this.user = 'Vasya';
    },
    controllerAs: 'vm',
  });
