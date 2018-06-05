var request = new XMLHttpRequest();
var data;
var table = '';
var status;
request.open('GET', 'student.json', true);

request.onload = function () {
	// begin accessing JSON data here
	 data = JSON.parse(this.response);
	 if (data.length < 15) {
	 for(var i=0; i< data.length; i++){
	 	
	 	var name = data[i].name;
	 	var names = name.charAt(0).toUpperCase() + name.substr(1);
	 	var roll_number = data[i].rollNumber;
	 	var maths = data[i].marks[0].maths;
	 	var english = data[i].marks[0].english;
	 	var science = data[i].marks[0].science;
	 	var total = maths + english + science;
	 	if (maths < 20 || english < 20 || science < 20) {
	 		status = "fail";
	 	}else{
	 		status = "pass";
	 	}
	    table += '<tr class='+status+'><td>'+names+'</td><td>'+roll_number+'</td><td>'+total+'</td><td>'+status.toUpperCase()+'</td></tr>';
	 }
	}
	 document.getElementById('tablebody').innerHTML = table;
}

request.send();
