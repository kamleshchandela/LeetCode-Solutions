# 260 - Single Number III

**Difficulty:** Medium  
**Problem:** [View on LeetCode](https://leetcode.com/problems/single-number-iii/)

---

## Description

Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

---

## Examples

**Example 1:**
```
Input: nums = [1,2,1,3,2,5]
Output: [3,5]
```

**Example 2:**
```
Input: nums = [-1,0]
Output: [-1,0]
```

---

## Constraints

- `2 <= nums.length <= 3 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

---

## Intuition & Approach

We need to find the two unique numbers that appear exactly once while all others appear twice.

### Algorithm
1. Use a hash map to count occurrences of each number
2. Iterate through the map to find numbers with count of 1
3. Return those two unique numbers

---

## Key Insights

- Hash map provides O(1) lookup and counting
- The problem requires O(n) time, but a hash map uses O(n) space
- Using bit manipulation can achieve O(1) space (the optimal solution)

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
| `[1,2,1,3,2,5]` | `[3,5]` (or `[5,3]`) |
| `[-1,0]` | `[-1,0]` (or `[0,-1]`) |

---

## Best Solution

```javascript
var singleNumber = function(nums) {
    var obj = {} ; 
    for(let i = 0 ; i < nums.length ; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1 ;
        }
        else{
            obj[nums[i]] += 1 ;
        }
    }
    var arr = [] ;
    var count = 0 ; 
    for(let i in obj){
        if(obj[i] == "1"){
            arr[count] = Number(i) ;
            count ++ ;
        }
    }
    return arr ;
};
```

**Runtime:** 11ms  
**Memory:** 56MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 19:17:34 | **Accepted** | **11ms** | **56MB** |
| 2 | 2026-02-21 19:25:58 | Accepted | 237ms | 56.3MB |

---

## Related Problems

- [136 - Single Number](https://leetcode.com/problems/single-number/)
- [137 - Single Number II](https://leetcode.com/problems/single-number-ii/)

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)