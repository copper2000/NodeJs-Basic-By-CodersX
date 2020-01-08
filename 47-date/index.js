// Date
// moment.js
var moment = require('moment');

// var now = new Date();
// var myBirthDay = new Date(2000, 0, 19); // 19-01-2000

// // number of milliseconds from 1-1-1970 +7
// console.log(now.getTime());
// console.log(myBirthDay.getTime());

var now = moment('2020-01-06 00:00');
console.log(now.format('DD/MM/YYYY'));