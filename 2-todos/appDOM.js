var todosList = [
	"Attend client meeting to get the requirements",
	"Send daily status to your boss",
	"Plan tasks for junior team members"
];

var todoItemTemplate = 	'<div class="todo-item">\
<div class="form-group col-md-9">\
{0}\
</div>\
<div style="border-radius:50%;background-color:black;text-align:center;" onClick="deleteTodo(event)" class="col-md-1">\
<i class="fa fa-minus fa-3x" style="color:white;"></i>\
</div>\
</div>';

var todosListElement = document.getElementById("todosList");

for(var i = 0; i < todosList.length; i++) {
	var todoItemHTML = todoItemTemplate.format(todosList[i]);
	todosListElement.innerHTML = todosListElement.innerHTML + todoItemHTML;
}

var deleteTodo = function(event){
	console.log("delete button clicked on the target, ", event.target);
	var buttonDiv = event.target.parentNode; //this returns the fa-minus button div
	var todoItemDiv = buttonDiv.parentNode; //this returns the todo item div
	todoItemDiv.remove();
}

var addTodo = function(eventElement){
	var inputContainer = eventElement.parentNode.previousElementSibling;
	var newTodoDesc = inputContainer.getElementsByTagName("input")[0].value;

	var todoItemHTML = todoItemTemplate.format(newTodoDesc);
	todosListElement.innerHTML = todosListElement.innerHTML + todoItemHTML;
}
