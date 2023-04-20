function hasTargetSum(array, target) {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (complement in hash) {
      return true;
    }
    hash[array[i]] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n), where n is the length of the input array.
*/

/* 
  Add your pseudocode here
  - Initialize an empty hash table
  - Iterate through each element of the input array
  - Calculate the complement of the current element with respect to the target
  - If the complement is already present in the hash table, return true
  - Otherwise, add the current element to the hash table
  - If the loop completes without finding a complement, return false
*/

/*
  Add written explanation of your solution here
  This solution uses a hash table to keep track of the elements seen so far. During each iteration of the input array, it checks if the complement of the current element with respect to the target is already in the hash table. If so, it returns true because the target sum has been found. Otherwise, it adds the current element to the hash table and continues with the next element. If the loop completes without finding a complement, the function returns false because the target sum is not present in the input array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
