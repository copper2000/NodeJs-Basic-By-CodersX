// setTimeOut
// clearTimeOut
// Syntax: setTimeout(fn, ms); // miliseconds
// timer
function done(){
    console.log('Finish');
}
console.log('Start');
var timeoutId = setTimeout(done, 1000) // anonymous function1
console.log('Done');
clearTimeout(timeoutId);
