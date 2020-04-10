
var a = [1,"a","b",0,5];

console.log(filterArray(a));

function filterArray(arr){
	
	var result = [];

	for(i=0;i<arr.length;i++){
		if(Number.isInteger(arr[i])){
			result.push(arr[i]);
		}
	}

	return result;
}