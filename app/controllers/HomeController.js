define('controllers/HomeController', ['app'], function (app) {
	'use strict';

	function HomeController($scope, $timeout) {
	}

	HomeController.$inject = ['$scope', '$timeout'];

	app.controller('HomeController', HomeController);
});