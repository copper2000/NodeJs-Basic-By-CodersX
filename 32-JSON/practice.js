var readlineSync = require('readline-sync'); // node custom module
var fs = require('fs'); // node module

var students = {};

while(true) {
  var choosed = readlineSync.question("Choose 1, 2, 3 \n");
  switch (parseInt(choosed)) {
    case 1:
      var info = fs.readFileSync('./data/data.json', {encoding: 'utf-8'});
      console.log("Student Info: " + info);
      break;
    case 2:
      var name = readlineSync.question("Student name: ");
      var age = readlineSync.question("Student age: ");
      var gender = readlineSync.question("Student gender: (Male/Female) ");
      students.name = name;
      students.age = age;
      students.gender = gender ;
      break;
    case 3:
      var myStudents = JSON.stringify(students); // convert object to json string
      console.log(myStudents);
      fs.writeFileSync('./data/data.json', myStudents);
      return false;
      break;
    default:
      console.log("Choose again!");
  }
}
