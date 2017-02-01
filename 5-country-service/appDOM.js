
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var countrySelectBox = document.getElementById("countryBox");
var countryNameBox   = document.getElementById("countryName");
var languageSelectBox = document.getElementById("languageBox");
var languageNameBox   = document.getElementById("languageName");
var countriesListResponse = httpGet("https://restcountries.eu/rest/v1/all");
var countriesList = JSON.parse(countriesListResponse);

//console.log("the number of countries are, ", countriesList);

countriesList.forEach(function(country){
	var optionElement = document.createElement("option");
	optionElement.innerHTML = country.name;
	countrySelectBox.append(optionElement);
});

// countrySelectBox.addEventListener("change", function(){
// 	console.log("on change event is triggered.");
// 	countryNameBox.innerHTML = countrySelectBox.value;
// });

var setCountryName = function(){
	var languagesList = [];
 	console.log("on change event for country is triggered.");
 	countryNameBox.innerHTML = countrySelectBox.value;
	languageNameBox.innerHTML = "";
	for(var i=0;i < countriesList.length; i++){
		if(countriesList[i].name == countrySelectBox.value){
			languagesList = countriesList[i].languages;
			break;
		}
	}

	languagesList.forEach(function(language){
		var languageElement = document.createElement("option");
		languageElement.innerHTML = language;
		languageSelectBox.append(languageElement);
	});
	
}

var setLanguage = function(){
	console.log("on change event for language is triggered.");
 	languageNameBox.innerHTML = languageSelectBox.value;
}
