// 1) Loop through alphabet 
// 2) Capitalize every other Letter
// 3) Convert Alphabet to a string 
// 4) Display alphabet w/ every other letter uppercase

camelLetters = angular.module("camelLetters", []);

camelLetters.factory("Alphabet", function(){
	var alphabet = {}, allLetters = "abcdefghijklmnopqrstuvwxyz";
	alphabet.letters = []; //vill contain array of objects with "letter" values

	allLetters = allLetters.split(""); //turns allLetters into an array

	//adds a {"letter" : "letterGoesHere"} for each element in the array
	allLetters.forEach(function(currentLetter, index, array){
		if (index % 2 === 1)
			alphabet.letters.push({"value" : currentLetter.toUpperCase()});
		else
			alphabet.letters.push({"value" : currentLetter});
	});
	console.log(alphabet);
	return alphabet;
});

function camelCtrl ($scope, Alphabet){
	$scope.alphabet = Alphabet;
	console.dir($scope.alphabet);
}