var isValid = {
  binary: function (value) {
    var numberArray = value.split('.');
    if (numberArray.length <= 2) {
      number = numberArray.join('');
      // console.log(number);
      number = number.split('');
      // console.log(number);
      for (let i = 0; i < number.length; i++) {
        if (number[i] != '1' && number[i] != '0') {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  },
  octal: function (value) {
    var numberArray = value.split('.');
    if (numberArray.length <= 2) {
      number = numberArray.join('');
      // console.log(number);
      number = number.split('');
      // console.log(number);
      for (let i = 0; i < number.length; i++) {
        if (
          isNaN(Number(number[i])) ||
          number[i] === '9' ||
          number[i] === '8'
        ) {
          // console.log(Number(number[i]));
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  },
  decimal: function (value) {
    var numberArray = value.split('.');
    if (numberArray.length <= 2) {
      number = numberArray.join('');
      // console.log(number);
      number = number.split('');
      // console.log(number);
      for (let i = 0; i < number.length; i++) {
        if (isNaN(Number(number[i]))) {
          // console.log(Number(number[i]));
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  },
  hexadecimal: function (value) {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
    let flag = 1;
    value = value.toUpperCase();
    var numberArray = value.split('.');
    if (numberArray.length <= 2) {
      number = numberArray.join('');
      // console.log(number);
      number = number.split('');
      // console.log(number);
      for (let i = 0; i < number.length; i++) {
        if (isNaN(Number(number[i]))) {
          // console.log(Number(number[i]));
          if (arr.indexOf(number[i]) == -1) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  },
};

let x = isValid.hexadecimal('610757657');
console.log(x);

//
//

var input = document.getElementsByTagName('input');
// console.log(input);
for (let i = 0; i < 4; i++) {
  input[i].onkeyup = function (e) {
    updated(e);
  };
}
function updated(e) {
  console.log(e.target.value);
  console.log(typeof e.target.name);
}
