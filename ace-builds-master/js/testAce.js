var app = angular.module("tang",[]);
app.controller('codeCtrl', ['$scope', function($scope){
	$scope.code = 'function foo(items) ';
}]);
