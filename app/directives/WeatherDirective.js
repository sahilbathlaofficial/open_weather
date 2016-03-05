/**
 * WeatherDirective - Displays weather based on current location or location provided in input
 *
 * @restrict Element
 * @example:
 * <weather></weather>
 *
 * modal-controller is optional
 */
define(['angular', 'app', 'text!views/shared/directives/weather.html', 'services/LocationService'], function (ng, app, template) {
	'use strict';

	function WeatherDirective (locationService) {
		return {
			restrict: 'E',
			template: template,
			compile: function () {
				return function link(scope, element, attrs) {

					scope.fetchLocation = function (locationData) {
						locationService.getLocation(locationData).then(function (weatherData) {
							scope.fetchedLocationWeather = {
								forecast: weatherData.data.weather[0].main + '(' + weatherData.data.weather[0].description + ')',
								temp: (weatherData.data.main.temp - 273).toFixed(1),
								humidity: weatherData.data.main.humidity,
								city: weatherData.data.name
							}
						}, function () {
							alert('Could not fetch data for ' + JSON.stringify(locationData));
						});
						scope.isManualLocationRequired = false;
					};

					scope.getManualLocation = function () {
						scope.isManualLocationRequired = true;
					}

					locationService.getGeoLocation().then(scope.fetchLocation, scope.getManualLocation);
				};
			}
		};
	}

	WeatherDirective.$inject = ['locationService'];

	app.directive('weather', WeatherDirective);
});
