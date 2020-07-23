//input validation for binary octal decimal and hexadecimal
//return true if valid or else false
var isValid = {
  binary: function (value) {
    if (value === '') {
      return false;
    }
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
    if (value === '') {
      return false;
    }
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
    if (value === '') {
      return false;
    }
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
    if (value === '') {
      return false;
    }
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

//
//
//setting event listeners
var input = document.getElementsByTagName('input');
// console.log(input);

for (let i = 0; i < 4; i++) {
  input[i].onkeyup = function (e) {
    updated(e);
  };
}

//switching control flow
function updated(e) {
  var element = e.target;
  var value = element.value;
  console.log(value);
  var name = element.name;
  console.log(name);
  e.target.className = 'invalid';

  switch (name) {
    case 'binary':
      {
        console.log('hello bin');
      }
      break;
    case 'octal':
      {
        console.log('hello oct');
      }
      break;
    case 'decimal':
      {
        console.log('hello dec');
      }
      break;
    case 'hexadecimal':
      {
        console.log('hello hex');
      }
      break;
  }
}

document
  .getElementsByTagName('button')[0]
  .addEventListener('click', function () {
    for (let i = 0; i < 4; i++) {
      input[i].value = '';
      input[i].className = 'valid';
    }
  });
