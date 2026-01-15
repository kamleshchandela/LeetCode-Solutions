# 136 - Single Number

**Difficulty:** Easy  
**Problem:** [LeetCode 136](https://leetcode.com/problems/single-number/)

## Problem Description

Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## Examples

**Example 1:**
```
Input: nums = [2,2,1]
Output: 1
```

**Example 2:**
```
Input: nums = [4,1,2,1,2]
Output: 4
```

**Example 3:**
```
Input: nums = [1]
Output: 1
```

## Constraints
- `1 <= nums.length <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`
- Each element in the array appears twice except for one element which appears only once.

## Approach

**Sorting Approach:**
1. Sort the array
2. Traverse in steps of 2, checking if the current element differs from the next
3. If it differs, that element is the single number
4. Handle the edge case where the single number is at the end

**Optimal XOR Approach (not implemented):**
- XOR all elements: `a ^ a ^ b = b` where `b` is the single number
- This gives O(n) time and O(1) space

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        if(nums.size() == 1){
            return nums[0];
        }
        sort(nums.begin(), nums.end());
        for(int i = 0; i < nums.size(); i = i + 2){
            if((i == nums.size() - 1) && nums[i] != nums[i-1]){
                return nums[i];
            }
            if(nums[i] != nums[i+1]){
                return nums[i];
            }
        }
        return -1;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n log n) - dominated by sorting
- **Space Complexity:** O(1) - sorts in place

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 20.7 MB | C++ |
| 209 ms | 54.5 MB | JavaScript |
