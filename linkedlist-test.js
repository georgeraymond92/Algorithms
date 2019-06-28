'use strict';

const Linkedlist = require('./lib/linkedlist').default;
const util = require('util');

let list = new Linkedlist("blue");
list.add('green')
list.add('red');
list.insertAfter('green', 'violet');
// list.delete('green');

console.log(util.inspect(list, { depth: 20 }));

