/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
  // Your code goes here
  let res = [];
  let o = {};
  for (let i = 0, len = numbers.length; i < len; i++) {
    let tmp = sum - numbers[i];
    if (o[tmp] !== undefined) {
        return [i, o[tmp]]
    //   res.push();
    } else {
        o[numbers[i]] = i
    }
  }
  return res.length ? res : null
}

const indices = findTwoSum([3, 1, 5, 7, 5, 9], 10);
console.log(indices);
