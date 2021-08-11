/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.components.js":
/*!***********************************!*\
  !*** ./src/app/app.components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.index */ "./src/app/home.index.js");
/* harmony import */ var _home_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_index__WEBPACK_IMPORTED_MODULE_0__);
// making sure my files load so we need to import each module here.


/***/ }),

/***/ "./src/app/app.module.js":
/*!*******************************!*\
  !*** ./src/app/app.module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/core.module */ "./src/app/services/core.module.js");
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.components */ "./src/app/app.components.js");
// loading shared module
 // loading all module components


var appModule = angular.module('angularjs-es6-starter-kit', [// shared module
'app.core', // 3rd party modules
'ui.router', // application specific modules
'app.header', 'app.home', 'app.user']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appModule);

/***/ }),

/***/ "./src/app/components/header/header.component.js":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.pug */ "./src/app/components/header/header.pug");

var headerComponent = {
  template: _header_pug__WEBPACK_IMPORTED_MODULE_0__.default
};
angular.module('app.header').component('header', headerComponent);

/***/ }),

/***/ "./src/app/components/header/header.module.js":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.js ***!
  \****************************************************/
/***/ (() => {

angular.module('app.header', []);

/***/ }),

/***/ "./src/app/components/home/home.component.js":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(function () {
  angular.module('app.home').component('home', {
    selector: 'home',
    template: __webpack_require__(/*! ./home.pug */ "./src/app/components/home/home.pug").default,
    controller: 'homeController',
    controllerAs: 'vm'
  });
})();

/***/ }),

/***/ "./src/app/components/home/home.controller.js":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.controller.js ***!
  \****************************************************/
/***/ (() => {

(function () {
  homeController.$inject = ["$log"];

  function homeController($log) {
    var vm = this;
    this.$onInit = $onInit;

    function $onInit() {
      vm.heading = 'Welcome to AngularJS ES6 Starter-Kit';
      $log.info('Activated Home View.');
    }
  }

  homeController.$inject = ['$log'];
  angular.module('app.home').controller('homeController', homeController);
})();

/***/ }),

/***/ "./src/app/components/home/home.module.js":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.js ***!
  \************************************************/
/***/ (() => {

angular.module('app.home', []);

/***/ }),

/***/ "./src/app/components/user/user.component.js":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.pug */ "./src/app/components/user/user.pug");

var userComponent = {
  controller: 'UserController',
  template: _user_pug__WEBPACK_IMPORTED_MODULE_0__.default
};
angular.module('app.user').component('user', userComponent);

/***/ }),

/***/ "./src/app/home.index.js":
/*!*******************************!*\
  !*** ./src/app/home.index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__("./src/app/components sync recursive ^(.*\\.([jt]s$))[^.]*$/i");

req.keys().sort(function (a, b) {
  if (a.includes('module')) {
    return -1;
  } // if (a.includes('controller') && !b.includes('module')) {
  // 	return -1;
  // }


  return 0;
}).forEach(function (key) {
  return req(key);
});

/***/ }),

/***/ "./src/app/services/core.module.js":
/*!*****************************************!*\
  !*** ./src/app/services/core.module.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router_helper_router_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-helper/router-helper.service */ "./src/app/services/router-helper/router-helper.service.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.service */ "./src/app/services/user/user.service.js");


var coreModule = angular.module('app.core', ['ui.router']); // inject services, config, filters and re-usable code
// which can be shared via all modules

coreModule.config(_router_helper_router_helper_service__WEBPACK_IMPORTED_MODULE_0__.default);
coreModule.service('userService', _user_user_service__WEBPACK_IMPORTED_MODULE_1__.default);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreModule);

/***/ }),

/***/ "./src/app/services/router-helper/app-routes.js":
/*!******************************************************!*\
  !*** ./src/app/services/router-helper/app-routes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: 'home',
  url: '/',
  component: 'home'
}, {
  name: 'user',
  url: '/user',
  component: 'user'
}]);

/***/ }),

/***/ "./src/app/services/router-helper/router-helper.service.js":
/*!*****************************************************************!*\
  !*** ./src/app/services/router-helper/router-helper.service.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ routerHelper)
/* harmony export */ });
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routes */ "./src/app/services/router-helper/app-routes.js");
routerHelper.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

function routerHelper($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true); // setting html5 mode to remove !# from url

  $urlRouterProvider.otherwise('/'); // setting default route

  _app_routes__WEBPACK_IMPORTED_MODULE_0__.default.forEach(function (route) {
    $stateProvider.state(route);
  });
}

/***/ }),

/***/ "./src/app/services/user/user.service.js":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserService)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService = /*#__PURE__*/function () {
  UserService.$inject = ["$http"];

  function UserService($http) {
    'ngInject';

    _classCallCheck(this, UserService);

    this.$http = $http;
  }

  _createClass(UserService, [{
    key: "get",
    value: function get() {
      return this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        return response.data;
      });
    }
  }]);

  return UserService;
}();



/***/ }),

/***/ "./src/app/test-files/one/one.component.js":
/*!*************************************************!*\
  !*** ./src/app/test-files/one/one.component.js ***!
  \*************************************************/
/***/ (() => {

console.log('one component');

/***/ }),

/***/ "./src/app/test-files/one/one.module.js":
/*!**********************************************!*\
  !*** ./src/app/test-files/one/one.module.js ***!
  \**********************************************/
/***/ (() => {

console.log('one module');

/***/ }),

/***/ "./src/app/test-files/one/one.service.js":
/*!***********************************************!*\
  !*** ./src/app/test-files/one/one.service.js ***!
  \***********************************************/
/***/ (() => {

console.log('one service');

/***/ }),

/***/ "./src/app/test-files/test.component.js":
/*!**********************************************!*\
  !*** ./src/app/test-files/test.component.js ***!
  \**********************************************/
/***/ (() => {

console.log('test component');

/***/ }),

/***/ "./src/app/test-files/test.module.js":
/*!*******************************************!*\
  !*** ./src/app/test-files/test.module.js ***!
  \*******************************************/
/***/ (() => {

console.log('test module');

/***/ }),

/***/ "./src/app/test-files/test.service.js":
/*!********************************************!*\
  !*** ./src/app/test-files/test.service.js ***!
  \********************************************/
/***/ (() => {

console.log('test service');

/***/ }),

/***/ "./src/app/test-files/two/two.component.js":
/*!*************************************************!*\
  !*** ./src/app/test-files/two/two.component.js ***!
  \*************************************************/
/***/ (() => {

console.log('two component');

/***/ }),

/***/ "./src/app/test-files/two/two.module.js":
/*!**********************************************!*\
  !*** ./src/app/test-files/two/two.module.js ***!
  \**********************************************/
/***/ (() => {

console.log('two module');

/***/ }),

/***/ "./src/app/test-files/two/two.service.js":
/*!***********************************************!*\
  !*** ./src/app/test-files/two/two.service.js ***!
  \***********************************************/
/***/ (() => {

console.log('two service');

/***/ }),

/***/ "./src/app/test.js":
/*!*************************!*\
  !*** ./src/app/test.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__("./src/app/test-files sync recursive ^(.*\\.([jt]s$))[^.]*$/i");

var importKeys = req.keys().slice();
console.log({
  importKeys: importKeys
});
var sortedKeys = importKeys.sort(function (a, b) {
  if (a.includes('module')) {
    return -1;
  }

  if (a.includes('controller') && !b.includes('module')) {
    return -1;
  }

  return 0;
});
console.log({
  sortedKeys: sortedKeys
});
sortedKeys.forEach(function (key) {
  return req(key);
});

/***/ }),

/***/ "./src/app/components/header/header.pug":
/*!**********************************************!*\
  !*** ./src/app/components/header/header.pug ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\"><a class=\"navbar-brand\" href=\"#\">AngularJS ES6 Starter-Kit</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbar-menu\"><ul class=\"navbar-nav\"><li class=\"nav-item\" ui-sref-active=\"active\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-expanded=\"false\"><a class=\"nav-link\" ui-sref=\"home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>&nbsp;Home</a></li><li class=\"nav-item\" ui-sref-active=\"active\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-expanded=\"false\"><a class=\"nav-link\" ui-sref=\"user\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i>&nbsp;Users</a></li></ul></div></nav>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/app/components/home/home.pug":
/*!******************************************!*\
  !*** ./src/app/components/home/home.pug ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"container\"><h1>{{vm.heading}}</h1><div class=\"accordion\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"card border-primary\"><div class=\"card-header bg-primary text-white btn-link\" id=\"headingOne\" role=\"tab\"><div class=\"accordion-toggle\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Collapsible Group Item #1</div></div><div class=\"collapse show\" id=\"collapseOne\" role=\"tabpanel\" aria-labelledby=\"headingOne\"><div class=\"card-body\">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\nnon cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\nput a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\nlabore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\nbeer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable\nVHS.</div></div></div><div class=\"card border-primary\"><div class=\"card-header bg-primary text-white btn-link\" id=\"headingTwo\" role=\"tab\"><div class=\"collapsed accordion-toggle\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">Collapsible Group Item #2</div></div><div class=\"collapse\" id=\"collapseTwo\" role=\"tabpanel\" aria-labelledby=\"headingTwo\"><div class=\"card-body\">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\nnon cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\nput a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\nlabore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\nbeer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable\nVHS.</div></div></div><div class=\"card border-primary\"><div class=\"card-header bg-primary text-white btn-link\" id=\"headingThree\" role=\"tab\"><div class=\"collapsed accordion-toggle\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">Collapsible Group Item #3</div></div><div class=\"collapse\" id=\"collapseThree\" role=\"tabpanel\" aria-labelledby=\"headingThree\"><div class=\"card-body\">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\nnon cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\nput a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\nlabore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\nbeer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable\nVHS.</div></div></div></div><br/><div class=\"checkbox\"><input id=\"check1\" type=\"checkbox\"/><label for=\"check1\">Remember Me?</label></div></div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/app/components/user/user.pug":
/*!******************************************!*\
  !*** ./src/app/components/user/user.pug ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"container\"><h1><i class=\"fa fa-users\"></i>&nbsp;Users</h1><table class=\"table table-bordered\"><thead class=\"thead-dark\"><th>Name</th><th>Username</th><th>Email</th><th>Website</th><th>Company</th></thead><tbody><tr ng-repeat=\"user in $ctrl.users\"><td>{{user.name}}</td><td>{{user.username}}</td><td><a href=\"mailto:{{user.email}}\">{{user.email}}</a></td><td>{{user.website}}</td><td>{{user.company.name}}</td></tr></tbody></table></div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/user/user.controller.ts":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.controller.ts ***!
  \****************************************************/
/***/ (() => {

var UserController = /** @class */ (function () {
    function UserController($log, userService) {
        'ngInject';
        var _this = this;
        this.$log = $log;
        this.userService = userService;
        this.$onInit = function () {
            _this.userService.get().then(function (users) {
                _this.users = users;
            });
            _this.$log.info('Activated User View.');
        };
        this.$log = $log;
        this.userService = userService;
    }
    return UserController;
}());
angular.module('app.user').controller('UserController', UserController);


/***/ }),

/***/ "./src/app/components/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/user/user.module.ts ***!
  \************************************************/
/***/ (() => {

angular.module('app.user', []);


/***/ }),

/***/ "./src/app/test-files/one/one.controller.ts":
/*!**************************************************!*\
  !*** ./src/app/test-files/one/one.controller.ts ***!
  \**************************************************/
/***/ (() => {

console.log('one controller');


/***/ }),

/***/ "./src/app/test-files/test.controller.ts":
/*!***********************************************!*\
  !*** ./src/app/test-files/test.controller.ts ***!
  \***********************************************/
/***/ (() => {

console.log('test controller');


/***/ }),

/***/ "./src/app/test-files/two/two.controller.ts":
/*!**************************************************!*\
  !*** ./src/app/test-files/two/two.controller.ts ***!
  \**************************************************/
/***/ (() => {

console.log('two controller');


/***/ }),

/***/ "./src/app/components sync recursive ^(.*\\.([jt]s$))[^.]*$/i":
/*!**********************************************************!*\
  !*** ./src/app/components/ sync ^(.*\.([jt]s$))[^.]*$/i ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./header/header.component.js": "./src/app/components/header/header.component.js",
	"./header/header.module.js": "./src/app/components/header/header.module.js",
	"./home/home.component.js": "./src/app/components/home/home.component.js",
	"./home/home.controller.js": "./src/app/components/home/home.controller.js",
	"./home/home.module.js": "./src/app/components/home/home.module.js",
	"./user/user.component.js": "./src/app/components/user/user.component.js",
	"./user/user.controller.ts": "./src/app/components/user/user.controller.ts",
	"./user/user.module.ts": "./src/app/components/user/user.module.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/app/components sync recursive ^(.*\\.([jt]s$))[^.]*$/i";

/***/ }),

/***/ "./src/app/test-files sync recursive ^(.*\\.([jt]s$))[^.]*$/i":
/*!**********************************************************!*\
  !*** ./src/app/test-files/ sync ^(.*\.([jt]s$))[^.]*$/i ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./one/one.component.js": "./src/app/test-files/one/one.component.js",
	"./one/one.controller.ts": "./src/app/test-files/one/one.controller.ts",
	"./one/one.module.js": "./src/app/test-files/one/one.module.js",
	"./one/one.service.js": "./src/app/test-files/one/one.service.js",
	"./test.component.js": "./src/app/test-files/test.component.js",
	"./test.controller.ts": "./src/app/test-files/test.controller.ts",
	"./test.module.js": "./src/app/test-files/test.module.js",
	"./test.service.js": "./src/app/test-files/test.service.js",
	"./two/two.component.js": "./src/app/test-files/two/two.component.js",
	"./two/two.controller.ts": "./src/app/test-files/two/two.controller.ts",
	"./two/two.module.js": "./src/app/test-files/two/two.module.js",
	"./two/two.service.js": "./src/app/test-files/two/two.service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/app/test-files sync recursive ^(.*\\.([jt]s$))[^.]*$/i";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.js");
/* harmony import */ var _app_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/test */ "./src/app/test.js");
/* harmony import */ var _app_test__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_test__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map