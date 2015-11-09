var app = angular.module("app", []);

app.controller("MainCtrl", function($scope){

	var recupereClients = angular.fromJson(localStorage.getItem("favClients"));

	$scope.msg = "MainCtrl test";

	$scope.client = [];

	var currentDateTime = function() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + '/' +
                   (currentdate.getMonth() + 1) + '/' +
                   currentdate.getFullYear() + ' ' +
                   currentdate.getHours() + ':' +
                   currentdate.getMinutes() + ':' +
                   currentdate.getSeconds();
    return datetime;
  }

	$scope.save = function(){
		$scope.client.push({
			id : $scope.client.length,
			name : $scope.nom,
			date : currentDateTime()
		});
	save();
	}

	function save(){
		localStorage.setItem("favClients", angular.toJson($scope.client));
	}
});