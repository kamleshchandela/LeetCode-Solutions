# 1807 - Partitioning Into Minimum Number Of Deci-Binary Numbers

**Difficulty:** Medium  
**Problem:** [partitioning-into-minimum-number-of-deci-binary-numbers](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/)

## Description

A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary.

Given a string `n` that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to `n`.

## Examples

**Example 1:**
```
Input: n = "32"
Output: 3
```

**Example 2:**
```
Input: n = "82734"
Output: 8
```

**Example 3:**
```
Input: n = "27346209830709182346"
Output: 9
```

## Constraints
- `1 <= n.length <= 10^5`
- `n` consists of only digits.
- `n` does not contain any leading zeros and represents a positive integer.

## Approach

Key insight: The answer is the maximum digit in the number.

### Algorithm
1. Find the maximum digit in the string
2. Return that digit as the answer

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Best Solution

**Runtime:** 10ms | **Memory:** 58.3MB (JavaScript)

```javascript
var minPartitions = function(n) {
    let max = 0 ;
    for(let i = 0 ; i < n.length ; i++){
        if(Number(n[i]) > max){
            max = Number(n[i]) ;
        }
    }
    return max ;
};
```

## Submission Statistics
- **Best Runtime:** 10ms (JavaScript)
- **Best Memory:** 58.3MB (JavaScript)
- **Total Submissions:** 1
- **Accepted Submissions:** 1
