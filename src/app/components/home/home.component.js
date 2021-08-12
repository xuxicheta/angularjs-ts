(function() {
	angular
		.module('app.home')
		.component('home', {
			selector: 'home',
			templateUrl: '/src/app/components/home/home.html',
			controller: 'homeController',
			controllerAs: 'vm',
		});


	angular.module('app.home').run($templateCache =>
		$templateCache.put('/src/app/components/home/home.html', require('/src/app/components/home/home.pug'))
	)
})();
