// npm - node package manager
var readlineSync = require('readline-sync');

var pet = {};

var name = readlineSync.question('What\'s your pet name? ');
var gender = readlineSync.question('What\'s your pet gender? (Male/Female) ');
var weight = readlineSync.question('What\'s your pet weight? ');

pet.name = name;
pet.gender = gender
pet.weight = parseInt(weight);

console.log(pet);
