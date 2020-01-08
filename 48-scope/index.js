// scope - phạm vi hoạt động của biến 
// 1. Global scope
// 2. Local scope
// When a function is executed -> create a new scope

var a = 1; // global scope

function random() {
    var b = Math.random(); // local scope
    console.log(b);
    console.log(a);
}

console.log(b); 
random();
