"use strict";

const indexes = [1,2,3,4,5,6,7,8,9,10];

for (var i = indexes.length - 1; i > 0; i--) {
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = indexes[i];
  indexes[i] = indexes[i];
  indexes[r] = tmp;
}

console.log(indexes)