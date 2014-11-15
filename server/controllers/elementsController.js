// var elementsApp=angular.module('elementsApp', []);
// var customerFactory = require('./factories/customerFactory.js');  //trying one approach
// require('./factories/customerFactory.js'); //trying a different approach


elementsApp.controller('elementController', function($scope, elementFactory){
	//deprecated after shifting from static data to data from database
	// $scope.customers=customerFactory.customers;
	$scope.elements=elementFactory.getElements(function(data){
		$scope.elements=data;
	});
	// $scope.elements=elementFactory.getElement(function(data){
	// 	$scope.elements=data;
	// });
	$scope.getElement = function(id){
		orderFactory.getElement(id);
	}
	// $scope.removeOrder = function(id){
	// 	orderFactory.deleteOrder(id);
	// }

	$scope.errors=elementFactory.errors;
});
