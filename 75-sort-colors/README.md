# 75 - Sort Colors

**Difficulty:** Medium  
**Problem:** [View on LeetCode](https://leetcode.com/problems/sort-colors/)

---

## Description

Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

---

## Examples

**Example 1:**
```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Example 2:**
```
Input: nums = [2,0,1]
Output: [0,1,2]
```

---

## Constraints

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

---

## Intuition & Approach

Sort the array in-place using selection sort approach.

### Algorithm
1. Iterate through the array multiple times
2. Find the maximum element in the unsorted portion
3. Swap it to the end of the unsorted portion
4. Repeat until all elements are sorted

---

## Key Insights

- Selection sort works well for this small dataset (n <= 300)
- In-place sorting requires no extra space
- Dutch National Flag algorithm is more optimal but not required

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n²) |
| **Space** | O(1) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[2,0,2,1,1,0]` | `[0,0,1,1,2,2]` |
| `[2,0,1]` | `[0,1,2]` |

---

## Best Solution

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i++){
            int max = -2147483648 ;
            int index = 0 ; 
            for(int j = 0 ; j < nums.size() - i ; j++){
                if(max < nums[j]){
                    max = nums[j] ;
                    index = j ;
                }
            }
            int temp = nums[index] ;
            nums[index] = nums[nums.size() - 1 - i] ; 
            nums[nums.size() - 1 - i] = temp ;
        }
    }
};
```

**Runtime:** 0ms  
**Memory:** 11.7MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-26 17:52:24 | Accepted | 2ms | 53.7MB |
| 2 | 2026-02-26 17:53:43 | **Accepted** | **0ms** | **11.7MB** (C++) |

---

## Related Problems

- [88 - Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- [280 - Wiggle Sort](https://leetcode.com/problems/wiggle-sort/)

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)