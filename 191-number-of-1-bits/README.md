# 191 - Number of 1 Bits

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/number-of-1-bits/)

---

## Description

Given a positive integer `n`, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

---

## Examples

**Example 1:**
```
Input: n = 11
Output: 3
Explanation: The input binary string 1011 has a total of three set bits.
```

**Example 2:**
```
Input: n = 128
Output: 1
```

**Example 3:**
```
Input: n = 2147483645
Output: 30
```

---

## Constraints

- `1 <= n <= 2^31 - 1`

---

## Intuition & Approach

Count the number of 1s in the binary representation of n.

### Algorithm
1. Convert n to a binary string using toString(2)
2. Iterate through each character
3. Count the number of '1' characters
4. Return the count

---

## Key Insights

- JavaScript's toString(radix) converts numbers to different bases
- The binary representation length is O(log n)
- Can also be solved with Brian Kernighan's algorithm (n & (n-1))

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(log n) |
| **Space** | O(log n) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `11` | `3` |
| `128` | `1` |
| `2147483645` | `30` |
| `1` | `1` |

---

## Best Solution

```javascript
var hammingWeight = function(n) {
    var num = n.toString(2) ;
    var count = 0 ;
    for(let i = 0 ; i < num.length ; i++){
        if(num[i] == 1){
            count ++ ;
        }
    }
    return count ;
};
```

**Runtime:** 0ms  
**Memory:** 54.5MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 02:12:49 | **Accepted** | **0ms** | **54.5MB** |

---

## Related Problems

- [338 - Counting Bits](https://leetcode.com/problems/counting-bits/)
- [461 - Hamming Distance](https://leetcode.com/problems/hamming-distance/)

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)