import angular from 'angular';
import './greet-user';
import './users';


angular
	.module('phonecatApp', [
		// 'ui.router',
		'greetUserModule',
		'usersModule',
	]);


