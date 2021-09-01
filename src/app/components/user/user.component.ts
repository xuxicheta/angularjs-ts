import angular from 'angular';

const userComponent = {
	controller: 'UserController',
	template: require('./user.pug'),
}


angular.module('app.user').component('user', userComponent);
