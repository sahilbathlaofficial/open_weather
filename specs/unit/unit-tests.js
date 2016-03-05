require(['test-runner', 'angular', 'angular-mocks', '../../app/services/LocationService'], function (testRunner, angular) {

	describe('openWeatherApp', function () {

		beforeEach(function() {
			module('openWeatherApp');
		});

		describe('locationService', function () {

			var locationService, httpBackend;

			beforeEach(function() {
				inject(function (_locationService_, $httpBackend) {
					locationService = _locationService_;
					httpBackend = $httpBackend;
				});
			});

			it('gets the correct weather data based on zip', function () {
				var weatherData;
				locationService.getLocation({zip: '110018'}).then(function(data) {
					expect(data.city).toBe('India');
				}, function (error) {
					expect("received error: " + error).toFail();
				});
    			httpBackend.flush();
			});
		});
	});

	testRunner.execJasmine();
});