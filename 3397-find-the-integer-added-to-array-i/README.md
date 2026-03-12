# 3397 - Find the Integer Added to Array I

**Difficulty:** Easy  
**Problem:** [LeetCode 3397](https://leetcode.com/problems/find-the-integer-added-to-array-i/)

## Problem Description

You are given two arrays of equal length, `nums1` and `nums2`. Each element in `nums1` has been increased (or decreased) by an integer `x`, resulting in `nums2`. Return the integer `x`.

## Examples

**Example 1:**
```
Input: nums1 = [2,6,4], nums2 = [9,7,5]
Output: 3
```

**Example 2:**
```
Input: nums1 = [10], nums2 = [5]
Output: -5
```

**Example 3:**
```
Input: nums1 = [1,1,1,1], nums2 = [1,1,1,1]
Output: 0
```

## Constraints
- `1 <= nums1.length == nums2.length <= 100`
- `0 <= nums1[i], nums2[i] <= 1000`

## Approach

Since the same value `x` is added to all elements, the difference between the minimum values of both arrays equals `x`.

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int addedInteger(vector<int>& nums1, vector<int>& nums2) {
        int min1 = 2147483647;
        int min2 = 2147483647;
        for(int i = 0; i < nums1.size(); i++){
            if(nums1[i] < min1){
                min1 = nums1[i];
            }
            if(nums2[i] < min2){
                min2 = nums2[i];
            }
        }
        return min2 - min1;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 35 MB | C++ |
| 0 ms | 35.2 MB | C++ |
| 1 ms | 55.8 MB | JavaScript |
| 1 ms | 56.9 MB | JavaScript |
| 1 ms | 57.3 MB | JavaScript |
| 1 ms | 57.5 MB | JavaScript |
