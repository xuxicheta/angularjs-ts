import './services/core.module';
import './components/home/home.module';
import './components/so-element/so-element.module';
import './components/header/header.module';

angular
	.module('angularjs-es6-starter-kit', [
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.header',
		'app.home',
	]);

