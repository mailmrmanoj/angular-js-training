var simpleDirectivesApp = angular.module('simpleDirectivesApp', [])

simpleDirectivesApp.controller('myCtrl', function($scope){

  var initColors = [ "red", "blue", "yellow", "green"]
  $scope.showAll = false;
	
  $scope.getColor = function(idx){
    return initColors[idx % 3]
  }
	
  $scope.notes = [
    "the color of copper sulphate is blue",
    "hoysalas made the city of Belur",
    "cholas are great temple builders",
    "the color of copper sulphate is blue",
    "hoysalas made the city of Belur",
    "cholas are great temple builders"
  ]  
})

