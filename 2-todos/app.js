var todosApp = angular.module("todosApp", []);

todosApp.controller("mainController", function($scope, $interval){
	$scope.todos = [
		"Attend client meeting to get the requirements",
		"Send daily status to your boss",
		"Plan tasks for junior team members"
	];

	$scope.addTodo = function(){
		$scope.todos.push($scope.newTodo);
	}

	$scope.deleteTodo = function(itemIndex){
		$scope.todos.splice(itemIndex, 1);
	}
});
