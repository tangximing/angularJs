'use strict';

var app = angular.module("tang",[]);
app.controller('testCtrl', ['$scope', function($scope){
	$scope.user = "tangximing";
	$scope.test = "def banner(text,scheduler):VirtualTest(scheduler,text,False,text,text)";
	$scope.change = function(){
		$scope.test = "1.txt";
	};
	$scope.change2 = function(){
		$scope.test = "2.py";
	};
}]);