var simpleDirectivesApp = angular.module('simpleDirectivesApp', [])

simpleDirectivesApp.controller('myCtrl', function($scope){
	$scope.showIfContent = true;
	$scope.showNgShowContent = true;
	$scope.showNgDisabledContent = true;

	$scope.disableInputBox = true;

})

