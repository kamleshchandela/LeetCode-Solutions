# 3242 - Count Elements With Maximum Frequency

**Difficulty:** Easy  
**Problem:** [LeetCode 3242](https://leetcode.com/problems/count-elements-with-maximum-frequency/)

## Problem Description

You are given an array `nums` consisting of positive integers.

Return the total frequencies of elements in `nums` such that those elements all have the maximum frequency.

## Examples

**Example 1:**
```
Input: nums = [1,2,2,3,1,4]
Output: 4
```

**Example 2:**
```
Input: nums = [1,2,3,4,5]
Output: 5
```

## Constraints
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Approach

1. Build frequency map of all elements
2. Find the maximum frequency
3. Count how many elements have max frequency
4. Return max frequency * count of elements with max frequency

## Solution (JavaScript)

```javascript
var maxFrequencyElements = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        }
        else{
            obj[nums[i]] += 1;
        }
    }
    let max = 0;
    for(let i in obj){
        if(obj[i] > max){
            max = obj[i];
        }
    }
    let count = 0;
    for(let i in obj){
        if(obj[i] == max){
            count++;
        }
    }
    return max * count;
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 3 ms | 56.5 MB | JavaScript |
