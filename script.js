const values = document.getElementsByTagName('input');
console.log(values);
// for (let i = 0; i < 4; i++) {
//   console.log(values[i].value);
// }
document.addEventListener('keydown', updated);

function updated() {
  console.log('hi');
}
