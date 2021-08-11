(function() {
	angular
		.module('app.home')
		.component('home', {
			selector: 'home',
			template: require('./home.pug').default,
			controller: 'homeController',
			controllerAs: 'vm',
		});
})();
