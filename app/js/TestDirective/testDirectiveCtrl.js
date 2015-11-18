app.controller('dirCtrl', ['$scope', function($scope){
	$scope.content = "test for directives";
	$scope.show = function(){
		console.log($scope.content);
	};
}]);

app.directive('drink',function(){
	return {
		restrict : 'E',
		scope : {
			code:'='
		},
		template: '<input type="text" ng-model="code"/>'
	};
});