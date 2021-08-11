class UserController {
	public users;

	constructor(
		private $log,
		private userService
	) {
		'ngInject';

		this.$log = $log;
		this.userService = userService;
	}

	$onInit = () => {
		this.userService.get().then((users) => {
			this.users = users;
		});

		this.$log.info('Activated User View.');
	};
}

angular.module('app.user').controller('UserController', UserController);
