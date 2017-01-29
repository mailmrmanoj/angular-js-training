var phoneNumberDirectiveApp = angular.module("phoneNumberDirectiveApp", []);


phoneNumberDirectiveApp.directive("phoneNumberInput", function(){
	return {
		template: '<div>\
<div class="form-group">\
<input type="text" class="form-control">\
</div>\
<div class="error" style="color:red;">\
</div>\
</div>',
		link: function(scope, element, attrs) {
			var inputElement = element[0].getElementsByTagName("input")[0];
			var errorElement = element[0].getElementsByClassName("error")[0];
			var rawValue = "";
			
			inputElement.onkeyup = function(event){
				console.log("event.keyCode is, ", event.keyCode, " And the corresponding character is ", String.fromCharCode(event.keyCode));
				errorElement.innerHTML = "";
				// Key code for TAB character. For some reasons, Alt+Tab to switch window triggers an input event.
				if (event.keyCode == 9) {
					return false;
				} else if (event.keyCode != 8) {
					rawValue = rawValue + String.fromCharCode(event.keyCode);
				} else {
					rawValue = rawValue.substring(0, rawValue.length -1 );
				}
				if (rawValue.length <= 10){
					inputElement.value = formatPhoneNumber(rawValue);
				}else {
					errorElement.innerHTML = "You cannot enter more than 10 characters";
				}
				return false;
			};

			//this is needed for some reason, keyup doesn't stop when the maximum limit of ten characters is reached.
			inputElement.onkeypress = function(event){
				console.log("keypress is fired.");
				return false;
			}
			
		}
	}
});

// utility function that converts a raw number to a formatted numbeer
// For example, 123 returns 123
// 123456 returns (123)-(456)
// 1234567890 returns (123)-(456)-7890
var formatPhoneNumber = function(value){
	if (value.length <= 3 ) {
		return value
	}else if (value.length <= 6) {
		var firstPart = value.substring(0, 3);
		var secondPart = value.substring(3, value.length);
		return "(" + firstPart + ")-" + "(" + secondPart + ")-" 
	} else if(value.length <= 10 ) {
		var firstPart = value.substring(0, 3);
		var secondPart = value.substring(3, 6);
		var thirdPart = value.substring(6, value.length);
		return "(" + firstPart + ")-" + "(" + secondPart + ")-" + thirdPart;
	} 
}
