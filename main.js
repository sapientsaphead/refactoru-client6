
// Question 1

// Starting Code
var pluralize = function (word, number) {
 if(number === 1) {
  return word;
 }
 else {
  return word + "s";
 }
};
	
// Rewritten Code

var pluralize = function (word, number) {
	return (number === 1) ? word : word + "s";
};


// Question 2

// Starting Code
var victim = {};

var getVictimInfo = function() {
 victim.name = prompt("Please enter your name:");
 victim.phone = prompt("Please enter your phone number:");
 victim.street = prompt("Please enter your street:");
};

alert('Thank you! Victim entered: \n' + 
 victim.name + ", " + 
 victim.phone + ", " + 
 victim.street);

// Rewritten Code

var getVictimInfo = function(){
	var victim = {};
	victim.name = prompt("Please enter your name:");
 	victim.phone = prompt("Please enter your phone number:");
 	victim.street = prompt("Please enter your street:");

 	return victim;
}

var VictimInfo = function(){
	var victim = getVictimInfo();
	alert('Thank you! Victim entered: \n' + 
 		victim.name + ", " + 
 		victim.phone + ", " + 
 		victim.street);
}

VictimInfo();

// Question 3

//Write a function which removes falsey values from an array. A falsey value is one which evaluates to false when type coerced, 
//which are the following: 0, null, "" (empty string), undefined, NaN, false.

//Write two versions of the function: one that uses side effects and one that is pure.

// Pure Function #1


// var myArray = [1, 2, "three", "", null, undefined, NaN, false, 5, "kitten",0];

// var cleanArray = function(array) {
// 	var newArray = myArray.filter(Boolean);
// 	return newArray;
// }

// cleanArray(myArray);

// Side Effects! Function #1

// var myArray = [1, 2, "three", "", null, undefined, NaN, false, 5, "kitten",0];

// var cleanArray = function(array) {
// 	myArray = myArray.filter(Boolean);
// 	return newArray;
// }

// cleanArray(myArray);

// Pure Function #2

var myArray = [1, 2, "three", "", null, undefined, NaN, false, 5, "kitten",0];

var cleanArray = function(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		Boolean(myArray[i]) === true ? newArray.push(myArray[i]) : false;
	}
	return newArray;
}

cleanArray(myArray);


// Side Effects! Function #2


var myArray = [1, 2, "three", "", null, undefined, NaN, false, 5, "kitten",0];

var cleanArray = function(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		Boolean(myArray[i]) === true ? newArray.push(myArray[i]) : false;
	}
	myArray = newArray;
	return myArray;
}

cleanArray(myArray);


// Raine's Solutions

// Impure

var arr = [1, 2, "three", "", null, undefined, NaN, false, 5, "kitten",0];

function removeFalseyImpure () {
	//loop through each item in teh array
	for(var i=0, len=arr.length; i<len; i++){
		//check if the item is falsey
		if (!arr[i]) {
			//SAME: if(arr[i] != false)
				//if so, remove it with slice
				arr.splice(i,1);

				//compensate for modifying the array
				i--;
		}
	}
}

// Pure
var arr = [1, 2, "three", "", null, undefined, NaN, false, 5, "kitten",0];

func

function removeFalseyImpure (arr) {
	//create empty array to store truthy values to return
	var output = [];

	//loop through each item in the array
	for(var i=0, len=arr.length; i<len; i++){

		//check if the array item is truthy
		if(arr[i]) {

			//if so, push it to the output array
			output.push(arr[i]);
		}
	}
	return output;
}

