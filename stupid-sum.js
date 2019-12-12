
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  console.log("Hello World");
});
const returnSum = (str1, str2) => {
  let result = 0

  let smaller = Math.min(str1.length, str2.length);

  let num1;
  let num2;

  if (str1.length > smaller) {
    num1 = str2.split('');
    num2 = str1.split('');

  } else {
    num1 = str1.split('');
    num2 = str2.split('');
  }
  // loop backwards form the 
  let carry = 0
  let i = num1.length - 1;
  let j = num2.length - 1;
  const results = [];
  for (; i >= 0 || j >= 0; i-- , j--) {
    // add num1[i], sum2[i], remainder
    let total = (i >= 0 ? parseInt(num1[i], 10) : 0) + (j >= 0 ? parseInt(num2[j], 10) : 0) + carry

    results.unshift(total % 10);
    carry = Math.floor(total / 10);

    // if length is greater than one add the character at the 0 index tho the next lowest element in the array ==> // update remainder
  }

  if (carry > 0) {
    results.unshift(carry);
  }

  result = results.join('')
  return result;

  // add remaing to next element
}
console.log(returnSum('10', '122'));

//  Input
//  Output 
//  Console Run Code
//  Output:
//  132
//  Hello World
//  Chat Window
