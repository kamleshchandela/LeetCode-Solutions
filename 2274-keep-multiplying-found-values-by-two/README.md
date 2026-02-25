# 2274 - Keep Multiplying Found Values by Two

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/keep-multiplying-found-values-by-two/)

---

## Description

You are given an array of integers `nums`. You are also given an integer `original`.

You then do the following steps:
1. If `original` is found in `nums`, multiply it by two.
2. Otherwise, stop the process.
3. Repeat this process with the new number as long as you keep finding the number.

Return the final value of `original`.

---

## Examples

**Example 1:**
```
Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 3 -> 6 -> 12 -> 24. All found in array.
```

**Example 2:**
```
Input: nums = [2,7,9], original = 4
Output: 4
Explanation: 4 is not found, so return 4.
```

---

## Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i], original <= 1000`

---

## Intuition & Approach

Keep doubling the number as long as it exists in the array.

### Algorithm
1. Check if original exists in nums
2. If found, double it and continue searching
3. If not found, return current value
4. Loop until no more matching doubled values

---

## Key Insights

- Each iteration checks if the double exists in the array
- Continue until a value is not found
- O(n * k) where k is number of successful doublings

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n * k) where k is number of doublings |
| **Space** | O(1) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[5,3,6,1,12], 3` | `24` |
| `[2,7,9], 4` | `4` |
| `[1,2,4,8], 1` | `16` |

---

## Best Solution

```cpp
class Solution {
public:
    int findFinalValue(vector<int>& nums, int original) {
        int check = true ;
        int n = original ;
        int first = true ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] == n){
                first = false ;
            }
        }
        if(first){
            return n ;
        }
        while(check){
            check = false ;
            for(int i = 0 ; i < nums.size() ; i++){
                if(nums[i] == n * 2){
                    check = true ;
                    n = n * 2 ;
                }
            }
            if(check == false){
                return n * 2 ;
            }
        }
        return 1 ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 14.1MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-25 06:54:43 | Accepted | 1ms | 53.5MB (JS) |
| 2 | 2026-02-25 06:56:24 | **Accepted** | **0ms** | **14.1MB** (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)