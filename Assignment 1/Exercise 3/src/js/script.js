
var a = [{ name: "Steve" },
		 { name: "Mike" },
		 { name: "John" }];


console.log(getStudentNames(a));

function getStudentNames(arr){
	
	var result = [];

	for(i=0;i<arr.length;i++){
		
		result.push(arr[i].name);
	}

	return result;
}