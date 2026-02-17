# 1585 - The kth Factor of n

**Difficulty:** Medium  
**Problem:** [View on LeetCode](https://leetcode.com/problems/the-kth-factor-of-n/)

---

## Description

You are given two positive integers `n` and `k`. A factor of an integer `n` is defined as an integer `i` where `n % i == 0`.

Consider a list of all factors of `n` sorted in ascending order, return the kth factor in this list or return -1 if `n` has less than `k` factors.

---

## Examples

**Example 1:**
```
Input: n = 12, k = 3
Output: 3
Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.
```

**Example 2:**
```
Input: n = 7, k = 2
Output: 7
```

**Example 3:**
```
Input: n = 4, k = 4
Output: -1
```

---

## Constraints

- `1 <= k <= n <= 1000`

---

## Intuition & Approach

We need to find all factors of n in ascending order and return the kth one.

### Algorithm
1. Iterate from 1 to n (inclusive)
2. For each i, if n % i == 0, add i to the factors array
3. After iteration, check if the array has at least k elements
4. Return the k-1 index if exists, otherwise return -1

---

## Key Insights

- Factors are naturally found in ascending order by iterating from 1 upward
- The number of factors is bounded by n, so this approach works
- Could be optimized using square root, but not necessary for n <= 1000

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
| `n = 12, k = 3` | `3` |
| `n = 7, k = 2` | `7` |
| `n = 4, k = 4` | `-1` |
| `n = 1, k = 1` | `1` |

---

## Best Solution

```javascript
var kthFactor = function(n, k) {
    var arr = [] ;
    var j = 0 ;
    for(let i = 0 ; i <= n ; i++){
        if(n % i == 0){
            arr[j] = i ;
            j++ ;
        }
    }
    if(k > arr.length){
        return -1 ;
    }
    return arr[k - 1] ;
};
```

**Runtime:** 0ms  
**Memory:** 53.3MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-17 23:53:14 | Accepted | 2ms | 55.1MB |
| 2 | 2026-02-20 18:57:26 | Accepted | 0ms | 53.3MB |
| 3 | 2026-02-20 19:27:34 | Accepted | 2ms | 54.6MB |
| 4 | 2026-02-21 01:49:26 | Accepted | 2ms | 54.5MB |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)