// Requirements :
// A student management app that is able to:
// - Show current student list
// - Add new Students

// 1. Show all students
// 2. Create a new students
// 3. Save & Exit

var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData() {
    var fileContent = fs.readFileSync('./data/data.json', { encoding: 'utf-8' });
    students = JSON.parse(fileContent);
}

function showMenu() {
    console.log("1. Show all students");
    console.log("2. Create a new student");
    console.log("3. Save and Exit");
}

function showAllStudents() {
    for (var student of students) {
        console.log(student.name, student.age);
    }
}

function saveAndExit() {
    var saveFileContent = JSON.stringify(students);
    fs.writeFileSync('./data/data.json', saveFileContent);
}

function showCreateStudent() {
    var name = readlineSync.question("Name: ");
    var age = readlineSync.question("Age: ");
    var student = {
        name: name,
        age: parseInt(age)
    }
    students.push(student);        

}

function main() {
    loadData();    
    while (true) {
        showMenu();
        var option = readlineSync.question("> ");
        switch (parseInt(option)) {
            case 1:
                showAllStudents();
                break;
            case 2:
                showCreateStudent();
                console.log(students);
                break;
            case 3:
                saveAndExit();
                return false;
            default:
                console.log("Wrong option!");
                break;
        }
    }
}
main();