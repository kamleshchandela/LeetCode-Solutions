# 1013 - Fibonacci Number

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/fibonacci-number/)

---

## Description

The Fibonacci numbers form a sequence where each number is the sum of the two preceding ones, starting from 0 and 1.

- F(0) = 0, F(1) = 1
- F(n) = F(n - 1) + F(n - 2), for n > 1

Given n, calculate F(n).

---

## Examples

**Example 1:**
```
Input: n = 2
Output: 1
```

**Example 2:**
```
Input: n = 3
Output: 2
```

**Example 3:**
```
Input: n = 4
Output: 3
```

---

## Constraints

- `0 <= n <= 30`

---

## Intuition & Approach

Compute the nth Fibonacci number iteratively.

### Algorithm
1. Initialize f1 = 0, f2 = 1
2. Handle base case: if n == 1, return 1
3. Loop n-1 times to compute subsequent Fibonacci numbers
4. Return the result after n-1 iterations

---

## Key Insights

- Iterative approach avoids the exponential time of naive recursion
- Only need to track two previous values at any time
- Works well for n <= 30

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
| `n = 0` | `0` |
| `n = 1` | `1` |
| `n = 2` | `1` |
| `n = 3` | `2` |
| `n = 4` | `3` |
| `n = 10` | `55` |

---

## Best Solution

```cpp
class Solution {
public:
    int fib(int n) {
        int f1 = 0 ; 
        int f2 = 1 ;
        int f3 = 0 ;
        if (n == 1) return 1 ;
        for(int i = 1 ; i < n ; i++){
            f3 = f1 + f2 ;
            f1 = f2 ; 
            f2 = f3 ;
        }
        return f3 ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 7.6MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 19:32:00 | Wrong Answer | NA | NA |
| 2 | 2026-02-21 19:33:02 | Accepted | 46ms | 53.4MB (JS) |
| 3 | 2026-02-21 19:33:53 | Accepted | 0ms | 7.6MB (C++) |
| 4 | 2026-02-21 19:34:47 | Accepted | 2ms | 7.7MB (C) |

---

## Related Problems

- [70 - Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [509 - Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)