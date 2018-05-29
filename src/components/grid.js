
///////////////
// FUNCTIONS //
///////////////

// const Grid = () => {
  // 1.Are the columns between 1 & 12?
  // const columnMinMax = (input) => {
  //   if (input >= 1 && input <= 12) {
  //     return input;
  //   } else {
  //     return console.error('Columns can only be between 1 & 12');;
  //   };
  // };
  
  // var output = columnMinMax();
  // console.log('output: ' + output);

  // 2. Convert columnMinMax() to percentage
  // const convertToPercent = (output) => {
  //   let calc = 100 / columnMinMax;
  //   let number = Number(calc).toFixed(2);
  //   return number;
  // };
  // var percent = convertToPercent();
  // console.log('percent: ' + percent);

  // var input = 10;
  const columnMinMax = (myNumber) => {
    if (myNumber >= 1 && myNumber <= 12) {
      return myNumber;
    };
  };

  const convertToPercent = (columnMinMax) => {
    let calc = 100 / columnMinMax;
    let number = Number(calc).toFixed(2);
    return number;
  };

const Grid = (myNumber) => {

  // 1.Are the columns between 1 & 12?
  columnMinMax(myNumber);
  convertToPercent(columnMinMax);

  // var cmm_output = columnMinMax();
  // console.log('output: ' + cmm_output);


  // 2. Convert columnMinMax() to percentage
 

  // var ctp_output = convertToPercent();
  // console.log('percent: ' + ctp_output);


  var className = 'cols-';

  if (convertToPercent == '100.00') {
      return className += '1';
  }
  else if (convertToPercent == '50.00') {
    return className += '2';
  }
  else if (convertToPercent == '33.33') {
    return className += '3';
  }
  else if (convertToPercent == '25.00') {
    return className += '4';
  }
  else if (convertToPercent === '20.00') {
    return className += '5';
  }
  else if (convertToPercent === '16.67') {
    return className += '6';
  }
  else if (convertToPercent === '14.29') {
    return className += '7';
  }
  else if (convertToPercent === '12.50') {
    return className += '8';
  }
  else if (convertToPercent === '11.11') {
    return className += '9';
  }
  else if (convertToPercent === '10.00') {
    return className += '10';
  }
  else if (convertToPercent === '9.09') {
    return className += '11';
  }
  else if (convertToPercent === '8.33') {
    return className += '12';
  } else {
    console.error('wrong');
    return;
  }
};

console.log('MyNumber: ' + Grid(2));
  // const con = Grid(2);
  // console.log('csdsds: ' + con);

  // API
  // const columnAPI = {
  //   c12: assignToClass(12),
  //   c11: assignToClass(11),
  //   c10: assignToClass(10),
  //   c9: assignToClass(9),
  //   c8: assignToClass(8),
  //   c7: assignToClass(7),
  //   c6: assignToClass(6),
  //   c5: assignToClass(5),
  //   c4: assignToClass(4),
  //   c3: assignToClass(3),
  //   c2: assignToClass(2),
  //   c1: assignToClass(1),
  // };

  // return assignToClass;


// };

// Grid();

// console.log('API: ' + Grid.c12);
