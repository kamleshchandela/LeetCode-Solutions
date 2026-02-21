# 137 - Single Number II

**Difficulty:** Medium  
**Problem:** [View on LeetCode](https://leetcode.com/problems/single-number-ii/)

---

## Description

Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

---

## Examples

**Example 1:**
```
Input: nums = [2,2,3,2]
Output: 3
```

**Example 2:**
```
Input: nums = [0,1,0,1,0,1,99]
Output: 99
```

---

## Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

---

## Intuition & Approach

Find the element that appears exactly once while all others appear three times.

### Algorithm
1. Iterate through each element in the array
2. For each element, count how many times it appears in the array
3. Find the element where count equals 1
4. Return it

---

## Key Insights

- This is a brute force O(n²) approach that passes within constraints
- The optimal solution uses bit manipulation with O(1) space
- For n <= 30000, this approach is acceptable

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
| `[2,2,3,2]` | `3` |
| `[0,1,0,1,0,1,99]` | `99` |

---

## Best Solution

```javascript
var singleNumber = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        var count = 0 ;
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[i] == nums[j]){
                count ++ ;
            }
        }
        if(count == 1){
            return nums[i] ;
        }
    }
    return -1 ;
};
```

**Runtime:** 60ms  
**Memory:** 55.7MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 19:23:19 | Accepted | 64ms | 54.5MB |
| 2 | 2026-02-21 19:26:08 | **Accepted** | **60ms** | **55.7MB** |

---

## Related Problems

- [136 - Single Number](https://leetcode.com/problems/single-number/)
- [260 - Single Number III](https://leetcode.com/problems/single-number-iii/)

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)