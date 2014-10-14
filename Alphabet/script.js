//This took me 10 minutes

// 1) Loop through alphabet 
// 2) Capitalize every other Letter
// 3) Convert Alphabet to a string 
// 4) Display alphabet w/ every other letter uppercase

(function capitalizeEveryOtherLetterInTheAlphabet(){

	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	//convert every other letter to uppercase
	alphabet.forEach(function(letter, index, array){
		if (index % 2 === 0)
			alphabet[index] = alphabet[index].toUpperCase();
	});


	//convert array to a string and print it to the page
	console.log(alphabet.join(", "));
	document.getElementById("alphabet").appendChild(document.createTextNode(alphabet.join(", ")));

})();

