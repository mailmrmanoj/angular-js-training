var todosApp = angular.module("todosApp", []);

todosApp.controller("mainController", function($scope, $interval){
	$scope.todos = [
		"Attend client meeting to get the requirements",
		"Send daily status to your boss",
		"Plan tasks for junior team members"
	];

	$scope.addTodo = function(){
		console.log("add a todo func is called..");
		$scope.todos.push($scope.newTodo);
	}

	$scope.deleteTodo = function(itemIndex){
		console.log("remove a todo func is called..");
		$scope.todos.splice(itemIndex, 1);
	}
});
