// if ... else
//
// syntax:
//
// if (condition) {
//   statement when true;
// } else {
//   statement when false;
// }
// Example: Toss a coin

// function tossCoin() {
//   var value = Math.random();
//   if (value < 0.5) {
//     console.log('Mat ngua');
//   }else{
//     console.log('Mat sap');
//   }
// }
// tossCoin();

// function CoNenTanGaiKhong() {
//   var value = Math.random();
//   if (value < 0.5) {
//     console.log("Có, tán đi!");
//   }
//   else {
//     console.log("Không, nó có bạn trai rồi!");
//   }
// }
// CoNenTanGaiKhong();

function countBills(bills) {
    var total = 0;
    for(var bill of bills) {
      if (!bill.fake) {
        total += bill.value;
      }else {
        console.log("Fake money:", bill.value);
        break;
      }
     
    }
    return total;
}
var bills = [
  {value: 10000},
  {value: 20000},
  {value: 40000, fake: true},
  {value: 500000},
];
var total = countBills(bills);
console.log(total);
