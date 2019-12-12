/**
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
 */



// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length < 1) return 0;
  // define array
  let listValueArray = [];

  // define ouput list var
  let result = null;

  // loop through lists array calling helper funtion on each item
  for (let i = 0; i < lists.length; i++) {
    // set value of array to the value the funtion return
    listValueArray = addListToArray(lists[i], listValueArray);
  }


  // sort array with list values
  listValueArray.sort(function (a, b) { return a - b });
  console.log(listValueArray);


  // result = listValueArray[0] ? new ListNode(listValueArray[0]) : 0;

  let node = result;

  // loop through sorted array adding each element to new linked list
  for (let i = 0; i < listValueArray.length; i++) {
    if (!result) {
      result = new ListNode(listValueArray[i]);
      node = result;
      continue;
    }
    node.next = new ListNode(listValueArray[i]);
    node = node.next;
  }

  return result;

};

// helper function to put linked lists into array
const addListToArray = (list, array) => {
  if (!list) return array;
  let result = [...array];
  let current = list;
  while (current.next) {
    result.push(current.val);
    current = current.next;
  }
  result.push(current.val);

  return result;
}


// Complexity Analysis

// Time complexity : O(N\log N)O(NlogN) where NN is the total number of nodes.

// Collecting all the values costs O(N)O(N) time.
// A stable sorting algorithm costs O(N\log N)O(NlogN) time.
// Iterating for creating the linked list costs O(N)O(N) time.
// Space complexity : O(N)O(N).

// Sorting cost O(N)O(N) space (depends on the algorithm you choose).
// Creating a new linked list costs O(N)O(N) space.