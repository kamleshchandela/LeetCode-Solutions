# 88 - Merge Sorted Array

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/merge-sorted-array/)

---

## Description

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`.

---

## Examples

**Example 1:**
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

**Example 2:**
```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
```

**Example 3:**
```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
```

---

## Constraints

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

---

## Intuition & Approach

Merge two sorted arrays into one sorted array.

### Algorithm
1. Copy elements from nums2 into the zero-initialized position of nums1
2. Use selection sort to sort the combined array in-place

---

## Key Insights

- Using the provided extra space in nums1 efficiently
- Bubble/selection sort approach works for small arrays
- Can work with any sorting method

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O((m+n)²) |
| **Space** | O(1) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[1,2,3,0,0,0], 3, [2,5,6], 3` | `[1,2,2,3,5,6]` |
| `[1], 1, [], 0` | `[1]` |
| `[0], 0, [1], 1` | `[1]` |

---

## Best Solution

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        for(int i = 0 ; i < n ; i++ ){
            nums1[m + i] = nums2[i] ;
        }
        for(int i = 0; i < nums1.size() ; i ++){
            int max = -2147483648 ; 
            int index = 0 ; 
            for(int j = 0 ; j < nums1.size() - i ; j++){
                if(max < nums1[j]){
                    max = nums1[j] ;
                    index = j ; 
                }
            }
            int temp = nums1[index] ;
            nums1[index] = nums1[nums1.size() - 1 - i] ;
            nums1[nums1.size() - 1 - i] = temp ;
        }
    }
};
```

**Runtime:** 0ms  
**Memory:** 12.4MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-24 17:52:32 | Wrong Answer | NA | NA (JS) |
| 2 | 2026-02-24 17:53:07 | Accepted | 1ms | 54.6MB (JS) |
| 3 | 2026-02-24 17:54:47 | Wrong Answer | NA | NA (C++) |
| 4 | 2026-02-24 17:55:32 | **Accepted** | **0ms** | **12.4MB** (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)