var simpleDirectivesApp = angular.module('simpleDirectivesApp', [])

simpleDirectivesApp.controller('myCtrl', function($scope){
	$scope.showIfContent = true;
	$scope.showNgShowContent = true;
	$scope.showNgDisabledContent = true;

	$scope.disableInputBox = true;
});

//Directive definition object....
// template, restrict, link,
simpleDirectivesApp.directive("helloWorld", function() {
	return {
		restrict : "A", 
		template : "Hello world. We started our session late today<br/>"
	}
});

//Read more on scope property in Directive Definition Object at https://thinkster.io/egghead/understanding-isolate-scope
simpleDirectivesApp.directive("helloWithName", function(){
	return {
		scope : {
			name : "@"
		},
		template : "Hello {{name}},"
	}
});
