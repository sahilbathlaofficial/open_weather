define('controllers/HomeController', ['app', 'directives/WeatherDirective'], function (app) {
	'use strict';

	function HomeController($scope, $timeout) {}

	HomeController.$inject = ['$scope', '$timeout'];

	app.controller('HomeController', HomeController);
});