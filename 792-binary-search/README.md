# 792 - Binary Search

**Difficulty:** Easy  
**Problem:** [LeetCode 792](https://leetcode.com/problems/binary-search/)

## Problem Description

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

## Examples

**Example 1:**
```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
```

**Example 2:**
```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
```

## Constraints
- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- All the integers in `nums` are unique.
- `nums` is sorted in ascending order.

## Approach

**Binary Search:**
1. Set left pointer to 0, right pointer to end of array
2. Calculate mid-point
3. If mid equals target, return mid
4. If mid is greater than target, search left half
5. If mid is less than target, search right half
6. Return -1 if not found

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int l = 0;
        int r = nums.size() - 1;
        while(l <= r){
            int m = int((l + r) / 2);
            if(nums[m] == target){
                return m;
            }
            else if (nums[m] > target){
                r = m - 1;
            }
            else {
                l = m + 1;
            }
        }
        return -1;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 31.4 MB | C++ |
| 0 ms | 57.8 MB | JavaScript |
| 0 ms | 58.3 MB | JavaScript |
| 0 ms | 58.4 MB | JavaScript |
