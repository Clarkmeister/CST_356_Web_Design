function initializeStudents() {
    var data = getTestStudents();
    displayStudents(data.students);
}

function getTestStudents() {
    return JSON.parse(testStudents);
}

function displayStudents(students) {

    for(i = 0; i < students.length; i++) {

        console.log('name: ' + students[i].name);
        
        var studentid = students[i].student_id;
        var eaddr = students[i].email_address;
        var markup = "<tr><td>" + studentid + "</td><td>" + eaddr + "</td></tr>";

        $("table tbody").append(markup);
    }
}

var testStudents = '{"students":[{"student_id":"100000000","email_address":"jon.doe@oit.edu"},{"student_id":"100000001","email_address":"jane.doe@oit.edu"},{"student_id":"100000002","email_address":"jack.doe@oit.edu"},{"student_id":"100000003","email_address":"jill.doe@oit.edu"},{"student_id":"100000004","email_address": "jerry.doe@oit.edu"}]}'