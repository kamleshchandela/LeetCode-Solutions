# 50 - Pow(x, n)

**Difficulty:** Medium  
**Link:** [powx-n](https://leetcode.com/problems/powx-n/)

## Description

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).

## Examples

**Example 1:**
```
Input: x = 2.00000, n = 10
Output: 1024.00000
```

**Example 2:**
```
Input: x = 2.10000, n = 3
Output: 9.26100
```

**Example 3:**
```
Input: x = 2.00000, n = -2
Output: 0.25000
```

## Constraints
- `-100.0 < x < 100.0`
- `-2^31 <= n <= 2^31-1`
- `n` is an integer.

## Approach

Use JavaScript's built-in exponentiation operator `**` which handles both positive and negative exponents directly.

## Solution (JavaScript)

```javascript
var myPow = function(x, n) {
    return x ** n ;
};
```

## Complexity Analysis

| Metric | Complexity |
|--------|------------|
| **Time** | O(log n) for the exponentiation operation |
| **Space** | O(1) |

## Submission Stats

| Language | Runtime | Memory |
|----------|---------|--------|
| JavaScript | 0ms | 55.4MB |
