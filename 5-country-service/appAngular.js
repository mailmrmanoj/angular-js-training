var countryApp = angular.module("cou", []);

countryApp.filter("demoCapitalize", function(){
	return function(x){
		if(x){
			return x.toUpperCase();
		}
	}
});

countryApp.service("countryService", function($http){
	this.getCountries = function(){
		return $http.get("https://restcountries.eu/rest/v1/all");
	}
});

countryApp.controller("mainController", function($scope, countryService){

	$scope.countryName = "Afghanistan";

	countryService.getCountries().then(function(response){
		$scope.countries = response.data;
		$scope.countryName = $scope.countries[0].name;
		//since directly setting the countryName property doesn't trigger the change//callback as discussed here - http://stackoverflow.com/questions/24579186/angularjs-select-ng-change-is-not-triggered-when-ng-model-is-initialized-in-cont, trigger it manually.
		$scope.setLanguages();
	});

	$scope.setLanguages = function(){
		var countryName = $scope.countryName;
		console.log("a new country has been chosen as, ", countryName);
		for(var i = 0; i < $scope.countries.length; i++) {
			if($scope.countries[i].name == countryName){
				console.log("setting the languages value as, ", $scope.countries[i].languages);
				$scope.languages = $scope.countries[i].languages;
				$scope.languageName = $scope.languages[0];
				break;
			}
		}
	}
});
