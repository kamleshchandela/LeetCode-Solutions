# 2283 - Sort Even and Odd Indices Independently

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/sort-even-and-odd-indices-independently/)

---

## Description

You are given a 0-indexed integer array `nums`. Rearrange the values of `nums` according to the following rules:

1. Sort the values at odd indices in non-increasing order.
2. Sort the values at even indices in non-decreasing order.

Return the array formed after rearranging the values of `nums`.

---

## Examples

**Example 1:**
```
Input: nums = [4,1,2,3]
Output: [2,3,4,1]
Explanation: Even indices [0,2] have values [4,2], sorted non-decreasing gives [2,4]. Odd indices [1,3] have values [1,3], sorted non-increasing gives [3,1]. Result: [2,3,4,1].
```

**Example 2:**
```
Input: nums = [2,1]
Output: [2,1]
```

---

## Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

---

## Intuition & Approach

Separate even and odd index elements, sort them, then reassemble.

### Algorithm
1. Iterate through positions and swap elements based on sorting requirements
2. For even indices (i % 2 == 0), swap to get non-decreasing order
3. For odd indices (i % 2 == 1), swap to get non-increasing order
4. Return the rearranged array

---

## Key Insights

- Using a bubble sort approach with step size 2 for even/odd positions
- Works within constraints (n <= 100)
- In-place sorting saves space

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
| `[4,1,2,3]` | `[2,3,4,1]` |
| `[2,1]` | `[2,1]` |
| `[1,2,3,4,5]` | `[1,5,3,4,5]` (if odd positions sorted non-increasing) |

---

## Best Solution

```cpp
class Solution {
public:
    vector<int> sortEvenOdd(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i++){
            if(i % 2 == 0){
                for(int j = 0 ; j < nums.size() ; j = j + 2){
                    if(nums[i] < nums[j] && j % 2 ==0){
                        int temp = nums[i] ;
                        nums[i] = nums[j] ;
                        nums[j] = temp ;
                    }
                }
            }
            else{
                for(int j = 1 ; j < nums.size() ; j = j + 2){
                    if(nums[i] > nums[j] && j % 2 == 1){
                        int temp = nums[i] ;
                        nums[i] = nums[j] ;
                        nums[j] = temp ;
                    }
                }
            }
        }
        return nums ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 15.5MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 23:17:06 | Accepted | 3ms | 58.3MB |
| 2 | 2026-02-21 23:18:12 | Accepted | 0ms | 15.4MB |
| 3 | 2026-02-21 23:22:32 | Accepted | 3ms | 57.8MB |
| 4 | 2026-02-21 23:22:56 | **Accepted** | **0ms** | **15.5MB** (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)