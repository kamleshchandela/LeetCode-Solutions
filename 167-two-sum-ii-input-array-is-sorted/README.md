# 167 - Two Sum II - Input Array Is Sorted

**Difficulty:** Medium  
**Problem:** [two-sum-ii-input-array-is-sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Description

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number.

Return the indices of the two numbers (1-indexed) as an integer array `[index1, index2]`.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

## Examples

**Example 1:**
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
```

**Example 2:**
```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
```

**Example 3:**
```
Input: numbers = [-1,0], target = -1
Output: [1,2]
```

## Constraints
- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in non-decreasing order.
- `-1000 <= target <= 1000`

## Approach

Brute force: Check all pairs.

### Algorithm
1. Iterate through each pair of indices
2. If sum equals target, return indices (1-indexed)

## Complexity
- **Time:** O(n^2)
- **Space:** O(1)

## Best Solution

**Runtime:** 445ms | **Memory:** 57MB (JavaScript)

```javascript
var twoSum = function(numbers, target) {
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i + 1 ; j < numbers.length ; j++){
            if(numbers[i] + numbers[j] == target){
                return [i+1,j+1] ;
            } 
        }
    }
};
```

## Submission Statistics
- **Best Runtime:** 445ms (JavaScript)
- **Best Memory:** 57MB (JavaScript)
- **Total Submissions:** 2
- **Accepted Submissions:** 1
