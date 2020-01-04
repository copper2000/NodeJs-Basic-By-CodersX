//  switch...case
// 
// Syntax: 
// switch(expression) {
//     case value1:
//         // do some thing;
//         break;
//     case value2:
//         // do some thing;
//         break;
//     default:
//         // do some thing;
//         break;
// }

// bronze, silver, gold, diamond
// bronze: 2%
// silver: 5%
// gold: 8%
// diamond: 10%
var readlineSync = require('readline-sync');
var memberCard = {
    tier: 'silver'
};

function getTotal(price, card) {
    var discountRate;
    switch(card.tier) { // the same:  memberCard.tier
        case 'bronze':
            discountRate = 0.02;
            break;
        case 'silver':
            discountRate = 0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;
        case 'diamond':
            discountRate = 0.1;
            break;
        default:
            console.log("Card member invalid!");
            break;
    }
    return price * (1 - discountRate);
}
var total = getTotal(500000, memberCard);
// console.log(total);

// red, green, orange
var trafficLight = readlineSync.question("Enter the color of the traffic light! ");

function goOrNotInVietNam(light) {
    switch(light) {
        case 'green':
            console.log('Go!');
            break;
        case 'red':
            console.log('Stop!');
            break;
        case 'yellow':
            console.log('Go!');
            break;
        default:
            console.log("Just go if you want!");
    }
}

goOrNotInVietNam(trafficLight);

