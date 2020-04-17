
var obj = [];

function addProject() {
	
	console.clear();
	document.getElementById("notify").style.display='none';
	document.getElementById('noProjectLabel').style.display='none';

	var pid = document.getElementById('pid').value;
	var pname = document.getElementById('pname').value;
	var description = document.getElementById('description').value;
	var status = document.getElementById('pstatus').value;

	var project = {
		'pid': pid,
		'pname': pname,
		'description' : description,
		'status': status
	};

	console.log("object length : "+this.obj.length);

	var length = this.obj.length;
	var flag = 1;
	document.getElementById("samePidLabel").style.display='none';

	if(length==0)
		this.obj.push(project);
	else {
		for(i=0;i<length;i++) {
			console.log("inside for loop");
			console.log("current pid : "+this.obj[i].pid);
			if(this.obj[i].pid==pid) {
				console.clear();
				console.error("Same pid cannot be added");
				document.getElementById("samePidLabel").style.display='inline';
				flag=0;
			}
		}
		if(flag)
			this.obj.push(project);
	}

	console.log(this.obj);

}

function viewProject(){
	if(this.obj.length>0) {
		showTable(this.obj);
	} else {
		document.getElementById('noProjectLabel').style.display='inline';
		document.getElementById('projectTable').style.display='none';
		console.log("There is no project in the list");
	}	
}

function showTable(obj) {

	document.getElementById("projectTable").innerHTML = '';

	var s;

	// Find a <table> element with id="myTable":
	var table = document.getElementById("projectTable");

	var header = table.createTHead();
	var row = header.insertRow(0);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	// Add some text to the new cells:
	cell1.innerHTML = "Project ID";
	cell2.innerHTML = "Project Name";
	cell3.innerHTML = "Description";
	cell4.innerHTML = "Status";
	cell5.innerHTML = "";

	console.log("table with header is : ");
	console.log(table);

	for(i=1;i<=obj.length;i++) {

		// Create an empty <tr> element and add it to the 1st position of the table:
		row = table.insertRow(i);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		cell3 = row.insertCell(2);
		cell4 = row.insertCell(3);
		cell5 = row.insertCell(4);

		// Add some text to the new cells:
		cell1.innerHTML = obj[i-1].pid;
		cell2.innerHTML = obj[i-1].pname;
		cell3.innerHTML = obj[i-1].description;
		cell4.innerHTML = '<select id="status'+obj[i-1].pid+'" onChange="changeStatus('+obj[i-1].pid+')"">'+
		'<option value="notStarted">Not Started</option>'+'<option value="inProgress">In progress</option>'+
		'<option value="completed">Completed</option>'+
		'</select>'

		if(obj[i-1].status=='notStarted') 
			index = 0;
		else if(obj[i-1].status=='inProgress')
			index = 1;
		else
			index = 2;

		console.log(this.obj[i-1].status);
		console.log(this.obj[i-1].pid);

		var selectedStatus = document.getElementById('status'+obj[i-1].pid);
		selectedStatus.selectedIndex = index;

		cell5.innerHTML = '<input type="button" id="d'+obj[i-1].pid+'" value="Delete Project" onCLick="deleteProject('+obj[i-1].pid+')">';

	}
	if(this.obj.length>0) {
		document.getElementById('projectTable').style.display='inline';	
	} else {
		document.getElementById('projectTable').style.display='none';
	}
	

}

function deleteProject(pid) {
	console.log(pid);
	document.getElementById("notify").style.display='none';	

	for(i=0;i<this.obj.length;i++) {
		if(this.obj[i].pid==pid)
			this.obj.splice(i,1);

	}

	console.log(this.obj);

	showTable(this.obj);
}

function changeStatus(pid){

	console.clear();
	console.log("Status change called");
	console.log(pid);

	document.getElementById("notify").style.display='inline';

	var newStatus = document.getElementById('status'+pid).value;

	console.log(this.obj);

	for(i=0;i<this.obj.length;i++) {
		if(this.obj[i].pid==pid)
			this.obj[i].status=newStatus;
	}

	var showStatus;

	if(newStatus=="notStarted")
		showStatus="Not Started";
	else if(newStatus=="inProgress")
		showStatus="In Progress";
	else
		showStatus="Completed";

	var notify = "Status of project id: " +pid+ " changed to " +showStatus;

	document.getElementById("notify").innerHTML = notify.bold();

}

function check(){
	console.log("Count rows");
	console.log("Size of list is : "+this.obj.length);
	console.log(document.getElementById('projectTable').rows.length);
	var rowNum = document.getElementById('projectTable').rows.length;
	var listSize = this.obj.length;
	if(rowNum>0){
		rowNum-=1;
	}

	if(listSize===rowNum) {
		var notify = "Project list and table rows are equal...";
		document.getElementById("notify").innerHTML = notify.bold();
	} else {
		var notify = "Project list and table rows are not equal...";
		document.getElementById("notify").innerHTML = notify.bold();
	}

	document.getElementById('notify').style.display='inline';

}