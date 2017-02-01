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
	$scope.country = "";
	countryService.getCountries().then(function(response){
		$scope.countries = response.data;
	});

	$scope.setLanguages = function(){
		var countryName = $scope.countryName.trim();
		console.log("a new country has been chosen as, ", countryName);
		for(var i = 0; i < $scope.countries.length; i++) {
			if($scope.countries[i].name == countryName){
				console.log("setting the languages value as, ", $scope.countries[i].languages);
				$scope.languages = $scope.countries[i].languages;
				break;
			}
		}
	}
});
