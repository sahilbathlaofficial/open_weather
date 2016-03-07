/*
	Weather Service can be used to fetch weather data for different type of locations
*/
define(['angular', 'app'], function (angular, app) {
	'use strict';

	function WeatherService ($http, OPEN_WEATHER_APP_ID) {
		var baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

		this.getWeatherData = function (locationData) {
			if (locationData.coords) {
				return $http.get(baseUrl + '?lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude + '&appid=' + OPEN_WEATHER_APP_ID);
			} else if (locationData.zip) {
				return $http.get(baseUrl + '?zip=' + locationData.zip + '&appid=' + OPEN_WEATHER_APP_ID);
			} else {
				return $http.get(baseUrl + '?q=' + locationData.query + '&appid=' + OPEN_WEATHER_APP_ID);
			}
		};

	}

	WeatherService.$inject = ['$http', 'OPEN_WEATHER_APP_ID'];

	app.service('weatherService', WeatherService);
});