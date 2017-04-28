'use strict';

function mergeArrays(arrA, arrB, lastEleA, lastEleB) {
  var indexA = lastEleA - 1,
      indexB = lastEleB - 1,
      mergeIndex = lastEleB + lastEleA - 1;

      while (indexB >= 0) {
        if (indexA >= 0 && arrA[indexA] > arrB[indexB]) {
          arrA[mergeIndex] = arrA[indexA];
          indexA --;
        } else {
          arrA[mergeIndex] = arrB[indexB];
          indexB --;
        }
        mergeIndex --;
      }
};

Module.exports = mergeArrays;
