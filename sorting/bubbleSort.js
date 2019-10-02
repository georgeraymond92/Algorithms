'use strict';


let array = [2, 5, 1, 155, 13, 22, 11, 502, 59];

let intSort = (num1, num2) => {
  return num1 - num2;
}

// this sorts the numbers in asending order
// console.log(array.sort(intSort));

// bubble sort "bubbles" the largest values to the top by 
// comparing elements to their neighbor and swapping their positions
// Generally time complexity is On^2 however the best case is that the input is already sorted and then
// the complexity could by On with the optimized version and depending on how many passes it takes Opn

// not optimized
let bubbleSort = (arr) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const swap = (arr, idx1, idx2) => {
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

// optimized
let bubbleSortOpt = (arr) => {
  for (let i = array.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        noSwaps = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSortOpt(array);
