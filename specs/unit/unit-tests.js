require(['test-runner', 'angular', 'angular-mocks', '../../app/services/LocationService'], function (testRunner, angular) {

	describe('openWeatherApp', function () {

		beforeEach(function() {
			module('openWeatherApp');
		});

		describe('locationService', function () {

			var locationService, $httpBackend;

			beforeEach(function() {
				inject(function (_locationService_, _$httpBackend_) {
					locationService = _locationService_;
					$httpBackend = _$httpBackend_;
					$httpBackend.whenGET(/.*zip.*/).respond({ temp: 318.5 });
				});
			});

			it('gets the correct weather data based on zip', function () {
				var weatherData;
				locationService.getLocation({zip: '110018'}).then(function(response) {
					expect(response.data.temp).toBe(318.5);
				}, function (error) {
					expect("received error: " + error).toFail();
				});
    			$httpBackend.flush();
			});
		});
	});

	testRunner.execJasmine();
});