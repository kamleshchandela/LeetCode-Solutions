# 2491 - Smallest Even Multiple

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/smallest-even-multiple/)

---

## Description

Given a positive integer `n`, return the smallest positive integer that is a multiple of both 2 and `n`.

---

## Examples

**Example 1:**
```
Input: n = 5
Output: 10
```

**Example 2:**
```
Input: n = 6
Output: 6
```

---

## Constraints

- `1 <= n <= 150`

---

## Intuition & Approach

Find the smallest multiple of n that is also divisible by 2.

### Algorithm
1. Check if n is even (n % 2 == 0)
2. If even, n is already the smallest even multiple
3. If odd, the smallest even multiple is n * 2

---

## Key Insights

- If n is even, n itself is divisible by 2
- If n is odd, we need to multiply by 2 to make it even
- This is O(1) time and space

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(1) |
| **Space** | O(1) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `n = 5` | `10` |
| `n = 6` | `6` |
| `n = 1` | `2` |
| `n = 7` | `14` |

---

## Best Solution

```cpp
class Solution {
public:
    int smallestEvenMultiple(int n) {
        if(n % 2 == 0){
            return n ;
        }
        else{
            return n * 2 ;
        }
    }
};
```

**Runtime:** 0ms  
**Memory:** 8MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-22 01:33:31 | **Accepted** | **0ms** | **8MB** (C++) |
| 2 | 2026-02-22 01:34:03 | Accepted | 0ms | 53MB |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)