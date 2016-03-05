define('app', ['angular', 'angular-route', 'geolocation'], function (angular, ngRoute, ngGeolocation) {
	'use strict';
	return angular.module('openWeatherApp', ['ngRoute', 'ngGeolocation']);
});