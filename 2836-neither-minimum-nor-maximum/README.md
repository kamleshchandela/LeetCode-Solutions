# 2836 - Neither Minimum nor Maximum

**Difficulty:** Easy  
**Problem:** [neither-minimum-nor-maximum](https://leetcode.com/problems/neither-minimum-nor-maximum/)

## Description

Given an integer array `nums` containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

## Examples

**Example 1:**
```
Input: nums = [3,2,1,4]
Output: 2
```

**Example 2:**
```
Input: nums = [1,2]
Output: -1
```

**Example 3:**
```
Input: nums = [2,1,3]
Output: 2
```

## Constraints
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- All values in `nums` are distinct

## Approach

Find min and max, then find a middle element.

### Algorithm
1. Find minimum and maximum values
2. Iterate through array and return first element that is neither min nor max
3. Return -1 if not found

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Best Solution

**Runtime:** 7ms | **Memory:** 97.1MB (C++)

```javascript
var findNonMinOrMax = function(nums) {
    let max = -2147483648 ;
    let min = 2147483647 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > max){
            max = nums[i] ;
        }
        if(nums[i] < min){
            min = nums[i] ;
        }
    }
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] != max && nums[i] != min){
            return nums[i] ;
        }
    }
    return -1 ;
};
```

## Submission Statistics
- **Best Runtime:** 7ms (C++)
- **Best Memory:** 97.1MB (C++)
- **Total Submissions:** 2
- **Accepted Submissions:** 2
