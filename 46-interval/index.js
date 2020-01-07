// setInterval
// clearInterval
// setInterval(fn, ms);
// var i = 0;
// var intervalId = setInterval(function() {
//     ++i;
//     console.log(i);
//     if(i === 5) {
//         clearInterval(intervalId);
//     }
// }, 1000);

// Write a function count from 1 to 10
// return a promise

function countFrom(a, b) {
    return new Promise(function (resolve, reject) {
        var count = 0;
        var oneToTen = setInterval(function () {
            count += a;
            console.log(count);            
            if (count === b) {
                clearInterval(oneToTen);                
            }                        
        }, 1000);                     
        return resolve();
    });
}

countFrom(1, 10).then(function(){
    console.log('Done');
});