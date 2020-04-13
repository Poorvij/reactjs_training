function display() {

	var num = document.getElementById("num").value;

	console.log(num);

	document.getElementById("prime").innerHTML = checkPrime(num);

}

function checkPrime(val) {

	for(i=2;i<val;i++) {
		if(val%i == 0) {
			console.log(i);
			return "Number is not a Prime number".bold();	
		}

	}
	return "Number is Prime".bold();

}
