// Heaps
// a binary heap is a tree where the children of each node are either smaller or larger than their parent nodes
// however unlike the binary search tree there is no rule about nodes relation to their siblings
// a max binary heap is a heap where the largest valued node is the root
// a min binary heap is a heap where the smallest valued node is the root of the tree
// if values are stored in an array the children can be found as follows
// Left Child: 2n + 1 Right Child: 2n + 2 where n is the index of the parent
// to find the parent (n-1)/2 floored

// Max Binary Heap
class MaxHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value)
    this.bubbleUp();
  }

  // push the new element to the end of the array and "bubble it up" by swapping with it's parent while values are in the wrong place
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (this.values[index] > this.values[parentIdx]) {
      let hold = this.values[parentIdx];
      this.values[parentIdx] = this.values[index];
      this.values[index] = hold;
      index = parentIdx;
    }
  }


}

let heap = new MaxHeap();
heap.insert(2);
heap.insert(5);
heap.insert(25);
heap.insert(13);
heap.insert(4);
heap.insert(7);

console.log(heap);





