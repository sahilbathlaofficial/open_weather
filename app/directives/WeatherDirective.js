/**
 * WeatherDirective - Displays weather based on current location or location provided in input
 *
 * @restrict Element
 * @example:
 * <weather></weather>
 *
 * modal-controller is optional
 */
define(['angular', 'app', 'text!views/shared/directives/weather.html'], function (ng, app, template) {
	'use strict';

	var defaultGeoLocationOptions = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function WeatherDirective ($geolocation) {
		return {
			restrict: 'E',
			template: template,
			compile: function () {
				return function link(scope, element, attrs) {

					scope.getGeoLocation = function () {
						$geolocation.getCurrentPosition(defaultGeoLocationOptions).then(scope.fetchLocation, scope.getManualLocation);
					};

					scope.fetchLocation = function (location) {
						scope.fetchedLocation = location;
						scope.isManualLocationRequired = false;
					};

					scope.getManualLocation = function () {
						scope.isManualLocationRequired = true;
					}

					scope.getGeoLocation();
				};
			}
		};
	}

	WeatherDirective.$inject = ['$geolocation'];

	app.directive('weather', WeatherDirective);
});
