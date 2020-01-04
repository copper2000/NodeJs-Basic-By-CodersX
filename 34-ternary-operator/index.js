// ternary operator

// Syntax:
// condition ? expression when true : expression when false

function tossCoin() {
  var value = Math.random();
  var result = (value < 0.5) ? "Mặt sấp" : "Mặt ngửa";
  console.log(result);
}
tossCoin();
