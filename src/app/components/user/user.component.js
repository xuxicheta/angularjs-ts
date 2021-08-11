import template from './user.pug';


const userComponent = {
	controller: 'UserController',
	template: template
}


angular.module('app.user').component('user', userComponent);
