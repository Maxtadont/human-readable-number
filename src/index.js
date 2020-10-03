module.exports = function toReadable (number) {
  let snumber = String(number);
  let res = [];
  let resString = '';
  
  function getOnes(s) {
    switch (s) {
      case '1': return 'one';
      case '2': return 'two';
      case '3': return 'three';
      case '4': return 'four';
      case '5': return 'five';
      case '6': return 'six';
      case '7': return 'seven';
      case '8': return 'eight';
      case '9': return 'nine';
    }
  }

  function getTenNineteen(s) {
    switch (s) {
      case '10': return 'ten';
      case '11': return 'eleven';
      case '12': return 'twelve';
      case '13': return 'thirteen';
      case '14': return 'fourteen';
      case '15': return 'fifteen';
      case '16': return 'sixteen';
      case '17': return 'seventeen';
      case '18': return 'eighteen';
      case '19': return 'nineteen'; 
    }
  }

  function getDecs(s) {
    switch (s) {
      case '2': return 'twenty';
      case '3': return 'thirty';
      case '4': return 'forty';
      case '5': return 'fifty';
      case '6': return 'sixty';
      case '7': return 'seventy';
      case '8': return 'eighty';
      case '9': return 'ninety';
    }
  }

  if (number === 0)
    res.push('zero');

  if (snumber.length === 1 && snumber[0] !== '0') {
    res.push(getOnes(snumber[0]));
  }

  if (snumber.length === 2) {
    if (snumber[0] === '1') {
      res.push(getTenNineteen(snumber[0] + snumber[1]));
    }
    else {
      res.push(getDecs(snumber[0]));
      res.push(getOnes(snumber[1]));
    }
  }

  if (snumber.length === 3) {
    res.push(getOnes(snumber[0]) + ' hundred');
    if (snumber[1] === '1') {
      res.push(getTenNineteen(snumber[1] + snumber[2]));
    }
    else {
      res.push(getDecs(snumber[1]));
      res.push(getOnes(snumber[2]));
    }
  }

  for (let i = 0; i < res.length; i++) {
    if (typeof res[i] === "string") {
      resString += res[i].trim() + ' ';
    }
      
  }
  
  return resString.trim();
  
}