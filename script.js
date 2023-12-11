function isSameType(value1, value2) {
	var ans=false;
  if (isNaN(value1) && isNaN(value2)) {
 ans=true;
  }

  else if(typeof value1 === typeof value2){
	  ans=true;
  }
	return ans;
}


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
