
function getAllPalindromes(str) {
  var i, j, result = [];

  for (i = 0; i < str.length; i++) {
      for (j = i + 2; j < str.length + 1; j++) {
        if( str.slice(i, j) === str.slice(i, j).split('').reverse().join('')) // get a substring and checks for the palindrome and push it to result 
          result.push(str.slice(i, j));
      }
  }
  return result;
}

var theString = 'civic';
console.log(getAllPalindromes(theString));// ['civic','ivi']