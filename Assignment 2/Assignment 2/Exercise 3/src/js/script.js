
var a = [{ id: 1, name: 'Project 1', desciption: 'This is first project...' },
		 { id: 2, name: 'Project 2', desciption: 'This is second project...' },
		 { id: 3, name: 'Project 3', desciption: 'This is third project...' }]

console.log(getProjectData(a,1));

function getProjectData(arr, id) {
	
	for(i=0;i<arr.length;i++) {

		if(arr[i].id == id) {
			return 'Project Name : ' + arr[i].name + ' & Project Desc : ' + arr[i].desciption;
		}
		
	}
	return 'Project not found';

}