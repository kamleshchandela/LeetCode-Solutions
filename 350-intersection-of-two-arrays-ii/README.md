# 350 - Intersection of Two Arrays II

**Difficulty:** Easy  
**Problem:** [LeetCode 350](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

## Problem Description

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.

## Examples

**Example 1:**
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
```

## Constraints
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

## Approach

1. Use maps to count occurrences in both arrays
2. For each element in first map, add min(count1, count2) occurrences to result

## Solution (C++ - Best)

```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        map<int, int> map1;
        map<int, int> map2;
        vector<int> arr;
        for(int i = 0; i < nums1.size(); i++){
            map1[nums1[i]]++;
        }
        for(int i = 0; i < nums2.size(); i++){
            map2[nums2[i]]++;
        }
        for(auto k : map1){
            int l = min(map1[k.first], map2[k.first]);
            for(int j = 0; j < l; j++){
                arr.push_back(k.first);
            }
        }
        return arr;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n + m)
- **Space Complexity:** O(n + m)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 15.2 MB | C++ |
| 1 ms | 55.3 MB | JavaScript |
