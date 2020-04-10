
var a = { a: 44, b: 45, c: 46 };

console.log(hasKey(a, "d"));

function hasKey(obj, key){
	
	return (Object.keys(obj).includes(key));

}