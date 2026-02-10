# 169 - Majority Element

**Difficulty:** Easy  
**Problem:** [LeetCode 169](https://leetcode.com/problems/majority-element/)

## Problem Description

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

## Examples

**Example 1:**
```
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**
```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

## Constraints
- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`
- The input is generated such that a majority element will exist in the array.

## Approach

**Hash Map Approach:**
1. Use a map to count occurrences of each element
2. Return immediately when an element's count exceeds `n/2`

**Optimal Boyer-Moore Voting Algorithm (not implemented):**
- O(n) time and O(1) space

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        map<int, int> map;
        for(int i = 0; i < nums.size(); i++){
            map[nums[i]]++;
            if(map[nums[i]] > nums.size() / 2){
                return nums[i];
            }
        }
        return -1;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n) - hash map storage

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 3 ms | 28.2 MB | C++ |
| 4 ms | 28.3 MB | C++ |
| 5 ms | 56 MB | JavaScript |
| 6 ms | 56.3 MB | JavaScript |
