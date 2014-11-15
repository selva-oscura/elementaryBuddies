var elementsApp=angular.module('elementsApp', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
		.when('/:id',
		{
			templateUrl: './partials/detail.htm',
			controller: 'elementController'
		})
		.when('/',
		{
			templateUrl: './partials/index.htm'
		})
		.otherwise({
			redirectTo: '/'
		});
});