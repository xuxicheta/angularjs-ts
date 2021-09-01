(function() {
	function homeController($log) {
		var vm = this;
		this.$onInit = $onInit;

		function $onInit() {
			vm.heading = 'Welcome to AngularJS ES6 Starter-Kit';
			$log.info('Activated Home View.');
		}

		function onElementChange(value) {
			console.log(value);
		}
	}

	homeController.$inject = ['$log'];

	angular
		.module('app.home')
		.controller('homeController', homeController);


	angular
		.module('app.home')
		.component('soHome', {
			template: require('./home.pug'),
			controller: 'homeController',
			controllerAs: 'vm',
		});
})();
