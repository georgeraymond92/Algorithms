'use strict';

// constructs a linked list node with a value and next properties
class Node {
  constructor(value) {
    this.val = value,
      this.next = null
  }
}


/* 
creates new linked list with a head node from provided value parameter
new linkedlist will have the following methods available
*/

class Linkedlist {
  constructor(value) {
    this.head = new Node(value);
  }

  // add => take a value and creates new list node at the end on the linkedlist
  add(value) {
    if (!value) return;
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(value);

  }

  // delete => takes a value and deletes the node with that value if it exists in the list
  delete(value) {
    if (!value) return;
    let current = this.head;
    let track;
    if (current.val === value) {
      this.head = current.next
      return;
    } else {
      while (current.next) {
        track = current;
        current = current.next;
        if (current.val === value) {
          track.next = current.next;
          return;
        }
      }
    }
  }

  // insertAfter => takes a given position and a value inserts a new list node with the provided value after the position provided
  insertAfter(position, value) {

    if (!value || !position) return;

    let current = this.head;
    let track;

    if (current.val === position) {
      track = current.next;
      current.next = new Node(value)
      current.next.next = track;
    } else {
      while (current.next) {
        current = current.next;
        track = current.next;
        if (current.val === position) {
          current.next = new Node(value);
          current.next.next = track;
          return;
        }
      }
    }
  }
}

exports.default = Linkedlist;


