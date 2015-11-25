app.controller('attributeCtrl', ['$scope','NgTableParams', function($scope, NgTableParams){
	var init = function(){
		$scope.displayType = ['textBox','dropDown'];
		$scope.type = $scope.displayType[0];
		$scope.tableParams = new NgTableParams({},{dataset: [{name: "Moroni", age: 50}, {name: "ximing", age: 23}]});
	};
    var originalData = angular.copy([{name: "Moroni", age: 50}, {name: "ximing", age: 23}]);

    $scope.tableParams = new NgTableParams({}, {
      filterDelay: 0,
      dataset: [{name: "Moroni", age: 50}, {name: "ximing", age: 23}]
    });

    $scope.cancel = cancel;
    $scope.del = del;
    $scope.save = save;

    //////////

    function cancel(row, rowForm) {
      var originalRow = resetRow(row, rowForm);
      angular.extend(row, originalRow);
    }

    function del(row) {
      angular.forEach($scope.tableParams.settings().dataset, function(item){
      })
      $scope.tableParams.reload().then(function(data) {
        if (data.length === 0 && self.tableParams.total() > 0) {
          self.tableParams.page(self.tableParams.page() - 1);
          self.tableParams.reload();
        }
      });
    }
    
    function resetRow(row, rowForm){
      row.isEditing = false;
      rowForm.$setPristine();
      self.tableTracker.untrack(row);
      return _.findWhere(originalData, function(r){
        return r.id === row.id;
      });
    }

    function save(row, rowForm) {
      var originalRow = resetRow(row, rowForm);
      angular.extend(originalRow, row);
    }
}]);