// Routes
var App = angular.module('App', ['ngRoute']);

// configure our routes
App.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'templates/android/file-manager.html'
		})

		.when('/about', {
			templateUrl : 'templates/android/file-manager.html'
		})
});

