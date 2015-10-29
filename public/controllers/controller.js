
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http){
    console.log("It's working...");

		  	$http.get('/contactList').success(function(response){
		 	console.log("got data I requested");
		 	$scope.contactList = response;
		});

		  $scope.addcontact = function(){
		  	//console.log($scope.contact);
		  		$http.post('/contactListPost', $scope.contact).success(function(response){
		  		console.log(response);

		  		$http.get('/contactList').success(function(response){
			 	console.log("got data I requested");
			 	$scope.contactList = response;
			});
  		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactList/' + id).success(function(response){
			$http.get('/contactList').success(function(response){
			 	console.log("got data I requested");
			 	$scope.contactList = response;
			 });
		});
	}

	$scope.edit = function(id){
			console.log(id);
			$http.get('/contactlist/'+ id).success(function(response){
				$scope.contact = response;
			});

	};

	$scope.update = function(){
		console.log($scope.contact._id);
		$http.put('/contactlist/'+ $scope.contact._id, $scope.contact).success(function(response){
			$http.get('/contactList').success(function(response){
			 	console.log("got data I requested");
			 	$scope.contactList = response;
			 });
		});
	};


	$scope.deselect = function(){
		$scope.contact = "";
	}



});

