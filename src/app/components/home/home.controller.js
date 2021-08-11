(function () {
	function homeController($log) {
		var vm = this;
		this.$onInit = $onInit;

		function $onInit() {
			vm.heading = 'Welcome to AngularJS ES6 Starter-Kit';
			$log.info('Activated Home View.');
		}
	}

	homeController.$inject = ['$log'];

	angular
		.module('app.home')
		.controller('homeController', homeController);
})();
