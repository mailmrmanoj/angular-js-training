var inputElements = document.getElementsByTagName("input");
var inputElement = inputElements[0];
var errorElement = document.getElementById("errorElement");

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

var rawValue = "";

//As mentioned  here https://developer.mozilla.org/en/docs/Web/Events/keypress, keypress is not receiving backspace event. So, using keyup event.
// inputElement.addEventListener("keyup", function(event){
// });
inputElement.onkeyup = function(event){
	console.log("event.keyCode is, ", event.keyCode, " And the corresponding character is ", String.fromCharCode(event.keyCode));
	errorElement.innerHTML = "";
	// Key code for TAB character. For some reasons, Alt+Tab to switch window triggers an input event.
	if (event.keyCode == 9) {
		return false;
	}//backspace key....
	else if (event.keyCode != 8) {
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

// enter a key
// it triggers keydown/keypress event
// it updates the input control
// it triggers keyup event

//this is needed for some reason, keyup doesn't stop when the maximum limit of ten characters is reached.
inputElement.onkeypress = function(event){
	console.log("keypress is fired.");
	return false;
}
