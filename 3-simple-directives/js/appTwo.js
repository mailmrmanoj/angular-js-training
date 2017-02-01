var simpleDirectivesApp = angular.module('simpleDirectivesApp', [])

simpleDirectivesApp.controller('myCtrl', function($scope){
	$scope.showIfContent = true;
	$scope.showNgShowContent = true;
	$scope.showNgDisabledContent = true;

	$scope.disableInputBox = true;

});

simpleDirectivesApp.directive("helloWorld", function(){
	return {
		template : "Hello world,"
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
