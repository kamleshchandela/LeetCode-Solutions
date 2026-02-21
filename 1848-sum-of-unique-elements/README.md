# 1848 - Sum of Unique Elements

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/sum-of-unique-elements/)

---

## Description

You are given an integer array `nums`. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of `nums`.

---

## Examples

**Example 1:**
```
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
```

**Example 2:**
```
Input: nums = [1,1,1,1,1]
Output: 0
```

**Example 3:**
```
Input: nums = [1,2,3,4,5]
Output: 15
```

---

## Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

---

## Intuition & Approach

Find elements that appear exactly once and sum them up.

### Algorithm
1. Iterate through each element in the array
2. For each element, count how many times it appears
3. If count equals 1, add it to the sum
4. Return the sum

---

## Key Insights

- Simple O(n²) approach works for small n (max 100)
- Can be optimized using a hash map but not necessary here

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
| `[1,2,3,2]` | `4` |
| `[1,1,1,1,1]` | `0` |
| `[1,2,3,4,5]` | `15` |

---

## Best Solution

```cpp
class Solution {
public:
    int sumOfUnique(vector<int>& nums) {
        int sum = 0 ; 
        for(int i = 0 ; i < nums.size() ; i++){
            int count = 0 ; 
            for(int j = 0 ; j < nums.size() ; j++){
                if(nums[i] == nums[j]){
                    count ++ ;
                }
            }
            if(count == 1){
                sum = sum + nums[i] ;
            }
        }
        return sum ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 10.6MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 20:03:37 | Accepted | 1ms | 53.6MB |
| 2 | 2026-02-21 20:03:41 | Accepted | 1ms | 54.2MB |
| 3 | 2026-02-21 20:04:29 | **Accepted** | **0ms** | **10.6MB** (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)