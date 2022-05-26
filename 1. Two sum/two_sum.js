/**
 * Assumptions, the input is not sorted
 * that there is a solution
 * my solution
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var twoSum = function(nums, target) {
//     let workingNums = [...nums];
//     workingNums.sort((a, b) => a - b);
//     let first = 0, second = workingNums.length - 1;

//     while (first < second) {
//         let total = workingNums[first] + workingNums[second];
//         if (total < target) {
//             first++;
//         } else if (total > target) {
//             second--;
//         } else {
//             let firstIndex = nums.findIndex(e => e === workingNums[first]);
//             let secondIndex = nums.lastIndexOf(workingNums[second]);
//             return [firstIndex, secondIndex];
//         }
//     }
// };

// /**
//  * Two pass hash method
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// function twoSum(nums, target) {
//     let valueIndexMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         valueIndexMap.set(nums[i], i);
//     }

//     for (let i = 0; i < nums.length; i++) {
//         let remainder = target - nums[i];
//         let indexFound = valueIndexMap.get(remainder);
//         if (indexFound && i != indexFound) {
//             return [i, indexFound];
//         }
//     }
// }

/**
 * single pass hash method
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let indexValueMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        let indexFound = indexValueMap.get(remainder);
        if (indexFound !== undefined) {
            return [indexFound, i];
        }

        indexValueMap.set(nums[i], i);
    }
 }

// nums = [2,7,11,15], target = 9, expected Output: [0,1]
console.log(twoSum([2,7,11,15], 9));

// nums = [3,2,4], target = 6, expected Output: [1,2]
console.log(twoSum([3,2,4], 6));

// nums = [3,3], target = 6, Output: [0,1]
console.log(twoSum([3, 3], 6));

// [1,6142,8192,10239] 18431, expected 2,3 
console.log(twoSum([1,6142,8192,10239], 18431));
