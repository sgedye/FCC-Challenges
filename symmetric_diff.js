// Find the Symmetric Difference in two or more Arguments.
// Note all attemps listed here work (i.e. give the correct answer)


/* --- Attempt 2 --- */
function sym(args) {
  let argsArr = Array.prototype.slice.call(arguments);
  if (argsArr.length < 2) { return null; }
  while (argsArr.length >= 2) {
    //Definine sets using the spread operator, similar to arrays, but each element is listed only once.
    let set1 = [...new Set (argsArr.shift())];
    let set2 = [...new Set (argsArr.shift())];
    //returnArr is filed with items that appear in only one of the sets
    let returnArr = [...set1.filter(el => !set2.includes(el))].concat([...set2.filter(el => !set1.includes(el))]);
    //add returnArr to the front of the argsArr to be shifted on the next iteration
    argsArr.unshift(returnArr);
  }
  //argsArr[0] will always be the returnArr, if 2+ arguments were provided
  return argsArr[0];
}
sym([1,3,2,1,9,8], [5,2,1,1,1,4,9], [8,8,8,8], [9,5], [1]); //Returns [3,4,9,1]


/* --- Attempt 1 --- */
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
