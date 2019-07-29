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
}


let start = [41, 39, 33, 18, 27, 12];
let maxheap = new MaxBinaryHeap();
maxheap.insert(55)


console.log(maxheap.values);


