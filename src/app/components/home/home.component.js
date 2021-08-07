(function() {
	const homeComponent = {
		selector: 'home',
		template: require('./home.pug').default,
		controller: 'HomeController',
		controllerAs: 'vm',
	};

	angular
		.module('app.home')
		.component(homeComponent.selector, homeComponent);
})();
