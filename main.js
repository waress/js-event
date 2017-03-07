var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var szum = document.querySelector('#szum');

num1.addEventListener("input", add);
num2.addEventListener("input", add);

function add() {
  var n1 = parseFloat(num1.value) || 0;
  var n2 = parseFloat(num2.value) || 0;
  szum.innerHTML = 'Két szám összege: ' + (n1 + n2);
}
