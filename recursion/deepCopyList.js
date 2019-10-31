// Copy List with Random Pointer

/**A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

 

Example 1:



Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
 

Note:

You must return the copy of the given head as a reference to the cloned list.
 */

/**
* // Definition for a Node.
* function Node(val,next,random) {
*    this.val = val;
*    this.next = next;
*    this.random = random;
* };
*/


// First Attempt Accepted but with very poor performance

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  };

  let copy = new Node(head.val, null, null);

  makeCopy(head, copy, copy);

  return copy;
};

const makeCopy = (node, current, copy) => {
  current.val = node.val;
  if (node.next) {
    current.next = new Node(node.next.val, null, null);
    makeCopy(node.next, current.next, copy)
  }

  if (node.random) {
    let track = copy;
    if (track.val == node.random.val) {
      current.random = track;
    } else {
      while (track.next) {

        if (track.next.val == node.random.val) {
          current.random = track.next;
        }
        track = track.next;

      }
    }

  }
}


// Second Attempt is a bit faster using a dictionary for quick reference locations


var copyRandomList = function (head) {
  if (!head) {
    return null;
  };
  let visited = {}
  let copy = new Node(head.val, null, null);

  makeCopy(head, copy, visited);

  return copy;
};

const makeCopy = (node, current, visited) => {
  current.val = node.val;
  visited[node.val] = current;
  if (node.next) {
    current.next = new Node(node.next.val, null, null);

    makeCopy(node.next, current.next, visited)
  }

  if (node.random) {
    current.random = visited[node.random.val];

  }
}