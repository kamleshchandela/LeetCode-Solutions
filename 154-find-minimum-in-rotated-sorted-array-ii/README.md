# 154 - Find Minimum in Rotated Sorted Array II

**Difficulty:** Hard  
**Problem:** [View on LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

---

## Description

Suppose an array of length `n` sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array `nums` that may contain duplicates, return the minimum element of this array.

---

## Examples

**Example 1:**
```
Input: nums = [1,3,5]
Output: 1
```

**Example 2:**
```
Input: nums = [2,2,2,0,1]
Output: 0
```

---

## Constraints

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- `nums` is sorted and rotated.

---

## Intuition & Approach

Since the array is rotated sorted with possible duplicates, the minimum element is at the pivot point where rotation occurs.

### Algorithm
1. Initialize min to MAX_INT value
2. Iterate through each element in the array
3. Track and update the minimum value
4. Return the minimum found

---

## Key Insights

- Even though this is O(n), it's acceptable given constraints (n <= 5000)
- The duplicates add complexity to binary search solutions
- A simpler linear scan reliably finds the minimum

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n) |
| **Space** | O(1) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[1,3,5]` | `1` |
| `[2,2,2,0,1]` | `0` |
| `[2,2,2,2]` | `2` |
| `[3,1,2]` | `1` |

---

## Best Solution

```cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        int min = 2147483647 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(min > nums[i]){
                min = nums[i] ;
            }
        }
        return min ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 16.2MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 01:30:39 | Accepted | 0ms | 54.3MB (JS) |
| 2 | 2026-02-21 01:33:49 | Accepted | 0ms | 16.3MB (C++) |
| 3 | 2026-02-21 01:34:37 | Accepted | 0ms | 16.3MB (C++) |
| 4 | 2026-02-21 01:34:42 | Accepted | 0ms | 54MB (JS) |
| 5 | 2026-02-21 01:39:01 | **Accepted** | **0ms** | **16.2MB** (C++) |

---

## Related Problems

- [153 - Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)