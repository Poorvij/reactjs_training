
function displayFullName() {

	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;

	document.getElementById("flname").innerHTML = camelCaseConcat(fname, lname);

}

function camelCaseConcat(fname, lname) {

	fname = fname[0].toUpperCase() + fname.slice(1) + " "; 
	lname = lname[0].toUpperCase() + lname.slice(1); 
	return fname.concat(lname).bold();

}

