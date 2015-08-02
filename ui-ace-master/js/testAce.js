var app = angular.module('tang', ['ui.ace']);
app.controller('aceCtrl', ['$scope', function($scope){
	$scope.code = "function foo(items)";
}]);