# 27 - Remove Element

**Difficulty:** Easy  
**Problem:** [LeetCode 27](https://leetcode.com/problems/remove-element/)

## Problem Description

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

## Examples

**Example 1:**
```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
```

**Example 2:**
```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
```

## Constraints
- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

## Approach

1. Iterate through array and swap elements equal to val with elements from the end
2. Count removed elements
3. Return array length minus count of removed elements

## Solution (JavaScript)

```javascript
var removeElement = function(nums, val) {
    var k = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length - i; j++){
            if(nums[j] == val){
                var temp = nums[j];
                nums[j] = nums[nums.length - 1 - k];
                nums[nums.length - 1 - k] = temp;
                k++;
                break;
            }
        }
    }
    return nums.length - k;
};
```

## Complexity Analysis
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 54.4 MB | JavaScript |
