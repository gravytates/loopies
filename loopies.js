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
