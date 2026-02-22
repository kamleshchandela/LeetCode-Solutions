# 2630 - Alternating Digit Sum

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/alternating-digit-sum/)

---

## Description

You are given a positive integer `n`. Each digit of `n` has a sign according to the following rules:

- The most significant digit is assigned a positive sign.
- Each other digit has an opposite sign to its adjacent digits.

Return the sum of all digits with their corresponding sign.

---

## Examples

**Example 1:**
```
Input: n = 521
Output: 4
Explanation: (+5) + (-2) + (+1) = 4.
```

**Example 2:**
```
Input: n = 111
Output: 1
Explanation: (+1) + (-1) + (+1) = 1.
```

**Example 3:**
```
Input: n = 886996
Output: 0
Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.
```

---

## Constraints

- `1 <= n <= 10^9`

---

## Intuition & Approach

Calculate the alternating sum of digits starting with positive for the most significant digit.

### Algorithm
1. Extract digits from n using modulo and division
2. Keep track of odd/even positions for alternating signs
3. Separate digits into positive and negative groups
4. If total digits is odd, return positive sum - negative sum
5. If total digits is even, return negative sum - positive sum

---

## Key Insights

- Most significant digit gets positive sign
- Sign alternates: +, -, +, -, ...
- Number of digits determines final sign orientation
- Using arrays to store grouped digits

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(d) where d is number of digits |
| **Space** | O(d) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `n = 521` | `4` |
| `n = 111` | `1` |
| `n = 886996` | `0` |
| `n = 1` | `1` |

---

## Best Solution

```javascript
var alternateDigitSum = function(n) {
    var sum1 = [] ;
    var sum2 = [] ;
    var count = 0 ;
    var n1 = 0 ;
    var n2 = 0 ;
    var check = true ;
    while (n >= 1){
        if(check){
            sum1[n1] = n % 10 ;
            n1 ++ ;
            check = false ;
        }
        else{
            sum2[n2] = n % 10 ;
            n2 ++ ;
            check = true ;
        }
        n = parseInt(n / 10) ;
        count ++ ;
    }
    var a = 0 ;
    for(let i = 0 ; i < sum1.length ; i++){
        a = a + sum1[i] ;
    }
    var b = 0 ;
    for(let i = 0 ; i < sum2.length ; i++){
        b = b + sum2[i] ;
    }
    if(count % 2 == 1)return a - b ;
    return b - a ;
};
```

**Runtime:** 0ms  
**Memory:** 53.2MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-22 23:03:57 | Wrong Answer | NA | NA |
| 2 | 2026-02-22 23:04:34 | Wrong Answer | NA | NA |
| 3 | 2026-02-22 23:17:39 | **Accepted** | **0ms** | **53.2MB** |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)