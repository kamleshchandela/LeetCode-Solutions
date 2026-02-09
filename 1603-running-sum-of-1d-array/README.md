# 1603 - Running Sum of 1d Array

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/running-sum-of-1d-array/)

---

## Description

Given an array `nums`. We define a running sum as `runningSum[i] = sum(nums[0]...nums[i])`.

Return the running sum of `nums`.

---

## Examples

**Example 1:**
```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
```

**Example 2:**
```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
```

**Example 3:**
```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

---

## Constraints

- `1 <= nums.length <= 1000`
- `-10^6 <= nums[i] <= 10^6`

---

## Intuition & Approach

The running sum is the cumulative sum of all elements up to the current index.

### Algorithm
1. Create a result array of the same size
2. Initialize a running sum variable to 0
3. Iterate through the array, adding each element to the running sum
4. Store each cumulative sum in the result array

---

## Key Insights

- In-place modification is possible by using the input array
- The running sum at index i equals the previous sum plus nums[i]
- This is a classic prefix sum pattern

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n) |
| **Space** | O(n) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[1,2,3,4]` | `[1,3,6,10]` |
| `[1,1,1,1,1]` | `[1,2,3,4,5]` |
| `[3,1,2,10,1]` | `[3,4,6,16,17]` |
| `[1]` | `[1]` |

---

## Best Solution

```cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> arr(nums.size()) ;
        int sum = 0 ; 
        for (int i = 0 ; i < nums.size() ; i++){
            sum = sum + nums[i] ;
            arr[i] = sum ;
        }
        return arr ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 12.6MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-09 23:57:37 | **Accepted** | **0ms** | **56MB** (JS) |
| 2 | 2026-02-20 18:12:38 | Accepted | 0ms | 12.6MB (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)