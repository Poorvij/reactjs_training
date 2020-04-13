
var a = { id: 1, name: 'Poorvi', description: 'Software Engineer', status: 'Complete' };

console.log(checkStatus(a));

function checkStatus(obj){
	
	if(('status' in obj) && (obj['status'] == 'Complete'))
		return true;
	else
		return false;	
}