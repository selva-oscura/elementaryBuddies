elementsApp.factory('elementFactory', function($http){
	var factory={};
	var elements=[];
	var message;
	factory.errors=[];
	factory.getElements=function(callback){
		$http.get('/api/elements').success(function(data){
			elements=data;
			callback(elements);
		}).error(function(data){
			console.log('getElements error:', data);
		});
	}
	factory.getElement=function(id){
		$http.get('/api/elements/'+id).success(function(data){
			element=data;
			console.log('factory',element);
			callback(element);
		}).error(function(data){
			console.log('getElement error:', data);
		});
	}
	return factory;
});
