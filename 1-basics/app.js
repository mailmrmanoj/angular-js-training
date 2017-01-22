var sivaApp = angular.module("skApp", []);

sivaApp.controller("mainController", function($scope, $interval){

	$scope.myText = "new text";
	$scope.newText = "this is another text";
  $scope.count = 0;
  $interval(function(){
    $scope.count = $scope.count + 1;
  }, 1000);

});
