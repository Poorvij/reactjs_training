
var a = [3,2,1,5,4];

console.log(minMax(a));

function minMax(arr){
	var result = [];

	result.push(Math.min.apply(Math, arr));
	result.push(Math.max.apply(Math, arr));

	return result;	
}