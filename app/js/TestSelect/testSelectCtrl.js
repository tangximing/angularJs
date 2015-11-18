app.controller('selectCtrl', ['$scope', function($scope) {
	var init;
	$scope.pickedSequences = [];
	init = function() {
		var i = 0;
		for (i = 0; i <= 22; i = i + 1) {
			$scope.pickedSequences.push({
				id: i,
				test: 'test_' + i
			});
		}
	};

	$scope.moveUp = function(){
		var index,tmpTest,tmpSelected = [];
		angular.forEach($scope.rightSelected, function(item){
			index = $scope.pickedSequences.indexOf(item);
			tmpTest = item.test;
			item.test = $scope.pickedSequences[index - 1].test;
			$scope.pickedSequences[index - 1].test = tmpTest;
			tmpSelected.push($scope.pickedSequences[index - 1]);
		});
		$scope.rightSelected = tmpSelected;	
	}
	init();
}]);