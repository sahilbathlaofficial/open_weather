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

	function WeatherDirective () {
		return {
			//Inherit scope from the parent.
			scope: {
				isOpen: '=controlVariable',
				onClose: '&?',
				content: '@',
				title: '@'
			},
			restrict: 'E',
			template: template,
			compile: function () {
				return function link(scope, element, attrs) {
					// Move this modalbox to body because modal box spans to complete screen,
					// so it shouldn't be interrupted by any other element's CSS (like overflow: hidden).
					document.body.appendChild(element[0]);

					scope.close = function close() {
						scope.isOpen = false;
					};

					scope.$on('$destroy', function () {
						element.remove();
					});
				};
			}
		};
	}

	app.directive('modalBox', WeatherDirective);
});
