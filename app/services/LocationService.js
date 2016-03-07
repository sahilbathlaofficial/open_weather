/*
	Location Service can be used to fetch geoLocation from browser
*/
define(['angular', 'app'], function (angular, app) {
	'use strict';

	function LocationService ($geolocation) {
		var defaultGeoLocationOptions = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		this.getGeoLocation = function () {
			return $geolocation.getCurrentPosition(defaultGeoLocationOptions);
		};
	}

	LocationService.$inject = ['$geolocation', '$http', 'OPEN_WEATHER_APP_ID'];

	app.service('locationService', LocationService);
});