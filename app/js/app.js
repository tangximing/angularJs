var app = angular.module('tang', ['ngRoute','ngTable']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when('/',{
			templateUrl: 'home.html'
		}).
		when('/testDirective',{
			templateUrl: 'TestDirective/testDirective.html',
			controller: 'dirCtrl'
		}).
		when('/testSelect',{
			templateUrl: 'TestSelect/testSelect.html',
			controller: 'selectCtrl'
		}).when('/testNgTable',{
			templateUrl: "TestNgTable/attribute.html",
			controller: 'attributeCtrl'
		});
}]);