const userComponent = {
	controller: 'UserController',
	templateUrl: '/src/app/components/user/user.html'
}


angular.module('app.user').component('user', userComponent);


angular.module('app.user').run($templateCache =>
	$templateCache.put('/src/app/components/user/user.html', require('./user.pug'))
)
