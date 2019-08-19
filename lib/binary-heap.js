// Binary Heaps ===> Binary Heaps are trees where child nodes are always great or smaller without order like a binary search tree.
// A binary heap will alway take the least amount of space available, populating nodes to the left first by default. Siblings in a binary heap have no 
// gaurenteed relation in regards to value like a BST

// Min and Max heaps

// MaxBinaryHeap ===> Parent nodes are always larger than child nodes
/*
*/
// MinBinaryHeap ===> Parent nodes are always smaller than child nodes



class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}


let start = [41, 39, 33, 18, 27, 12];
let maxheap = new MaxBinaryHeap();
maxheap.insert(55)
console.log(maxheap.values);
maxheap.extractMax();
console.log(maxheap.values);
maxheap.extractMax();
console.log(maxheap.values);
maxheap.extractMax();
console.log(maxheap.values);
maxheap.extractMax();
console.log(maxheap.values);
maxheap.extractMax();
console.log(maxheap.values);
maxheap.extractMax();
console.log(maxheap.values);
maxheap.extractMax();
console.log(maxheap.values);
