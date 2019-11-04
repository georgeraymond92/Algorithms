'use strict';

let array = [2, 5, 1, 155, 13, 22, 11, 502, 59];


const swap = (arr, idx1, idx2) => {
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

// selection sort loops throught the array and finds the minimum value and swaps it to the lowest postion
// it the increments and loops again putting the next lowest of the remaining elments to the current position
// big O of selection sort is On^2 roughly
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min != i) {
      swap(arr, i, min);
    }
  }
  console.log(arr);
  return arr;
}

selectionSort(array);