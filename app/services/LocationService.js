define(['angular', 'app'], function (angular, app) {
	'use strict';

	function LocationService ($geolocation, $http, OPEN_WEATHER_APP_ID) {
		var baseUrl = 'http://api.openweathermap.org/data/2.5/weather',
			defaultGeoLocationOptions = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			};

		this.getLocation = function (locationData) {
			if (locationData.coords) {
				return $http.get(baseUrl + '?lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude + '&appid=' + OPEN_WEATHER_APP_ID);
			} else if (locationData.zip) {
				return $http.get(baseUrl + '?zip=' + locationData.zip + '&appid=' + OPEN_WEATHER_APP_ID);
			} else {
				return $http.get(baseUrl + '?q=' + locationData.query + '&appid=' + OPEN_WEATHER_APP_ID);
			}
		};

		this.getGeoLocation = function () {
			return $geolocation.getCurrentPosition(defaultGeoLocationOptions);
		};
	}

	LocationService.$inject = ['$geolocation', '$http', 'OPEN_WEATHER_APP_ID'];

	app.service('locationService', LocationService);
});