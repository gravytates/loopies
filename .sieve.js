var makeArray = function(start, end) {
	tempArray = [];
	for(i=start; i <= end; i++){
		tempArray.push(i);
	}
	return tempArray;
}

//sieve of eratosthenes

//mk1 THE O.G REVISION
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

//mk2 REVISION 2
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
