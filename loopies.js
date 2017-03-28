//count via multiples function
var countUp = function(max, increment){
	if((max != NaN) && (increment != NaN)){
  	if((max > 0) && (increment > 0)){
    	if(max >= increment){
      	for(i=0; i <= max; i+= increment){
        	console.log(i);
        };
      }
      else {
  			alert("Invalid input");
  		}
    }
    else {
  		alert("Invalid input");
  	};
  }
  else {
  	alert("Invalid input");
  };
};

//loop through items
var flavs = ["choco", "unicorn", "vanilla"];
for(i=0; i <= flavs.length; i+=1) {
	console.log(flavs[i]);
};

//replace vowels with dashes
var string = "test sentence!"
var strarray = string.split("")
var newArray = [];

for(i=0; i<=strarray.length; i++) {
	if (strarray[i]==="a" || strarray[i]==="e" || strarray[i]==="i" || strarray[i]==="o" || strarray[i]==="u") {
		newArray.push("-");
	}
  else{
  	newArray.push(strarray[i]);
  }
}

var newString = newArray.join("");


// factorial function
var factorial = function(number) {
  if(number < 0) {
		return -1;
	}
	else if(number == 0) {
		return 1;
	}

	else {
		return (number * factorial(number - 1));
	}
};

//palindromes
var pal = "racecar";
 var palCheck = function(string) {
	var strArray = string.split("");
	var strReverse = strArray.slice().reverse();
	console.log(strArray);
	console.log(strReverse);
	if (strReverse.toString() === strArray.toString()) {
		alert("it's a palindrome!");
	} else {
		alert("it's not a palindrome you pleb!");
    }
 }
palCheck(pal);


var makeArray = function(start, end) {
	tempArray = [];
	for(i=start; i <= end; i++){
		tempArray.push(i);
	}
	return tempArray;
}

//sieve of eratosthenes

//mk1
var primeHunter = function(array){
	var newArray = [];
	array.forEach(function(number){
		if(number === 2
			|| number === 3
			|| number === 5
			|| number === 7
			|| number === 9
			|| number === 11
			|| number === 13){
			newArray.push(number);
		}
		else if((number % 2) === 0
		|| (number % 3) === 0
		|| (number % 5) === 0
		|| (number % 7) === 0
		|| (number % 9) === 0
		|| (number % 11) === 0
		|| (number % 13) === 0){
			newArray.splice(number, 1 );
		}
		else{
			newArray.push(number);
		}
	});
	console.log(newArray);
};





//mk2
var primeCompare = function(number){
	var result = false;
	var basePrimes = [2,3,5,7,9,11,13];
	basePrimes.forEach(function(prime){
		if (number === prime) {
			result = true;
		}
	});
	return result;
};

var primeMultiple = function(number) {
	var result = false;
	var basePrimes = [2,3,5,7,9,11,13];
	basePrimes.forEach(function(prime){
		if (number % prime === 0) {
			result = true;
		}
	});
	return result;
}

var primeHunter = function(array){
	var newArray = [];
	array.forEach(function(number){
		if (primeCompare(number)) {
			newArray.push(number);
		}
		else if (primeMultiple(number)){
			newArray.splice(number, 1 );
		}
		else{
			newArray.push(number);
		}
	});
	console.log(newArray);
};

primeHunter(makeArray(2,100));
