elementsApp.controller('elementController', function($scope, elementFactory, $routeParams){
	//deprecated after shifting from static data to data from database
	// $scope.customers=customerFactory.customers;
	$scope.elements=elementFactory.getElements(function(data){
		$scope.elements=data;
	});
	$scope.element=elementFactory.getElement($routeParams.id, function(data){
		$scope.element=data[0];
	});
	$scope.errors=elementFactory.errors;
});
