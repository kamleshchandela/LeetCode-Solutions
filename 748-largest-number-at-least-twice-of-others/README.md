# 748 - Largest Number At Least Twice of Others

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/largest-number-at-least-twice-of-others/)

---

## Description

You are given an integer array `nums` where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

---

## Examples

**Example 1:**
```
Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer. For every other number x, 6 is at least twice as big as x.
```

**Example 2:**
```
Input: nums = [1,2,3,4]
Output: -1
```

---

## Constraints

- `2 <= nums.length <= 50`
- `0 <= nums[i] <= 100`
- The largest element in `nums` is unique.

---

## Intuition & Approach

Check each element to see if it is at least twice as big as every other element.

### Algorithm
1. For each potential dominant element (check all n elements)
2. For each other element in the array, verify it satisfies the condition
3. If all conditions pass, return that index
4. If no dominant element exists, return -1

---

## Key Insights

- Need to verify dominant condition for each candidate
- Compare against 2x each other element
- Works within constraints (n <= 50)

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
| `[3,6,1,0]` | `1` |
| `[1,2,3,4]` | `-1` |
| `[0,0,0,1]` | `3` |

---

## Best Solution

```cpp
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        bool check = true ;
        for(int i = 0 ; i < nums.size() ; i++){
            check = true ;
            for(int j = 0 ; j < nums.size() ; j++){
                if(nums[i] < (nums[j] * 2) && i != j){
                    check = false ;
                    break ;
                }
            }
            if(check){
                return i ;
            }
        }
        return -1 ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 13.8MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-25 07:36:45 | Accepted | 1ms | 54MB |
| 2 | 2026-02-25 07:37:56 | **Accepted** | **0ms** | **13.8MB** (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)