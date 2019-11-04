// Merge Sort

// Time and Space complexity:
// time best case : O(n log n)
// time average case : O(n log n)
// time worst case : O(n log n)
// Space: O(n)

let input = [2, 55, 13, 67, 34, 12, 32, 88, 92, 74];

const merge = (arr1, arr2) => {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {


      sorted.push(arr1[i])
      i++;
    } else {


      sorted.push(arr2[j]);
      j++;
    }

  }
  while (i < arr1.length) {
    sorted.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    sorted.push(arr2[j])
    j++;
  }

  return sorted
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right)
}


let arr = [2, 4, 7, 20];
let arr2 = [3, 4, 6, 7];

console.log(mergeSort(input))

console.log(merge(arr, arr2));