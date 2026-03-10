# 2278 - Find Three Consecutive Integers That Sum to a Given Number

**Difficulty:** Medium  
**Problem:** [find-three-consecutive-integers-that-sum-to-a-given-number](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/)

## Description

Given an integer `num`, return three consecutive integers (as a sorted array) that sum to `num`. If `num` cannot be expressed as the sum of three consecutive integers, return an empty array.

## Examples

**Example 1:**
```
Input: num = 33
Output: [10,11,12]
```

**Example 2:**
```
Input: num = 4
Output: []
```

## Constraints
- `0 <= num <= 10^15`

## Approach

Mathematical insight: If n % 3 == 0, then n = (n/3 - 1) + (n/3) + (n/3 + 1).

### Algorithm
1. If num is divisible by 3, return [num/3 - 1, num/3, num/3 + 1]
2. Otherwise, return empty array

## Complexity
- **Time:** O(1)
- **Space:** O(1)

## Best Solution

**Runtime:** 0ms | **Memory:** 8.5MB (C++)

```cpp
class Solution {
public:
    vector<long long> sumOfThree(long long num) {
        if(num % 3 == 0){
            long long int a = num / 3 ;
            return {(a - 1) , a , (a + 1)} ;
        }
        return {} ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 0ms (C++)
- **Best Memory:** 8.5MB (C++)
- **Total Submissions:** 2
- **Accepted Submissions:** 2
