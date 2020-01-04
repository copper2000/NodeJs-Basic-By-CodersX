var Mouse = require('./mouse');
var Cat = require('./cat');

var mouse1 = new Mouse('black');
console.log(mouse1);

var cat1 = new Cat();
cat1.eat(mouse1);
console.log(cat1);
