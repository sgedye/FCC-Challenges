// Find the Symmetric Difference in two or more Arguments.

/* 
** For each arg in arguments, sort the arg array, then filter to only show each number once (i.e. [1,1,2,2,2,3,4] => [1,2,3,4])
** Then merge the arg arrays from each argument (i.e. mergedArr = arr1 + arr2 + arr3 + ...)
** Flatten and sort this merged array and then,
** Filter out numbers if they appear an even number of times
** Return this filtered merged array.
*/

function sym(args) {
  let argsArr = Array.prototype.slice.call(arguments);
  let mergedArr = [];
  if (argsArr.length < 2) { return null; }
  //For each argument sort the array and display each number only once.
  for (let i=0; i<argsArr.length; i++) {
    let arr = argsArr[i].sort();
    let tempArr = [];
    for (let j=0; j<arr.length; j++) {
      if (tempArr.indexOf(arr[j]) < 0) {
        tempArr.push(arr[j]);
      }
    }
    mergedArr.push(tempArr);
  }
  //Flatten and sort the merged array.
  let sortedArr = mergedArr.flat().sort();
  let outArr = [];
  //If a number is shown an odd number of times it should be displayed in the final array.
  for (let i=0; i<sortedArr.length; i++) {
    let count = 0;
    let numTimes = 0;
    while (count < sortedArr.length) {
      if (sortedArr[i] === sortedArr[count]) {
        numTimes++;
      }
      count++;
    }
    if (numTimes % 2 !== 0 && outArr.indexOf(sortedArr[i]) === -1) {
      outArr.push(sortedArr[i]);
    }
  }
	return outArr;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
