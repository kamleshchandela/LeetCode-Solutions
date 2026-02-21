# 2575 - Minimum Cuts to Divide a Circle

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/)

---

## Description

A valid cut in a circle can be:
- A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or
- A cut that is represented by a straight line that touches one point on the edge of the circle and its center.

Given the integer `n`, return the minimum number of cuts needed to divide a circle into `n` equal slices.

---

## Examples

**Example 1:**
```
Input: n = 4
Output: 2
```

**Example 2:**
```
Input: n = 3
Output: 3
```

---

## Constraints

- `1 <= n <= 100`

---

## Intuition & Approach

This is a mathematical problem with a simple solution based on whether n is even or odd.

### Algorithm
1. If n == 1, return 0 (no cuts needed)
2. If n is even, return n / 2
3. If n is odd, return n

---

## Key Insights

- For even n: each cut creates 2 equal slices, so we need n/2 cuts
- For odd n: we need n cuts because no diameter can perfectly divide
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
| `n = 1` | `0` |
| `n = 2` | `1` |
| `n = 3` | `3` |
| `n = 4` | `2` |
| `n = 5` | `5` |

---

## Best Solution

```cpp
class Solution {
public:
    int numberOfCuts(int n) {
        if(n == 1){
            return 0 ;
        }
        if(n % 2 == 0){
            return n / 2 ;
        }
        {
            return n ;
        }
    }
};
```

**Runtime:** 0ms  
**Memory:** 7.9MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-22 01:13:29 | Accepted | 0ms | 53MB |
| 2 | 2026-02-22 01:14:35 | **Accepted** | **0ms** | **7.9MB** (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)