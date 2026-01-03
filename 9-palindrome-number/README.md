# 9 - Palindrome Number

**Difficulty:** Easy  
**Problem:** [palindrome-number](https://leetcode.com/problems/palindrome-number/)

## Description

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

## Examples

**Example 1:**
```
Input: x = 121
Output: true
```

**Example 2:**
```
Input: x = -121
Output: false
```

**Example 3:**
```
Input: x = 10
Output: false
```

## Constraints
- `-2^31 <= x <= 2^31 - 1`

## Approach

Reverse the number and compare.

### Algorithm
1. If x is negative, return false
2. Reverse the number digit by digit
3. Compare reversed number with original

## Complexity
- **Time:** O(log n)
- **Space:** O(1)

## Best Solution

**Runtime:** 2ms | **Memory:** 8.7MB (C++)

```cpp
class Solution {
public:
    bool isPalindrome(int x) {
        if(x < 0){
            return false ;
        }
        else {
            long long int num = 0 ;
            int ans = x ;
            while(x >= 1){
                int temp = x % 10 ;
                num = num * 10 + temp ;
                x = int(x / 10) ;
            }
            if(num == ans){
                return true ;
            }
            else{
                return false ;
            }
        }
    }
};
```

## Submission Statistics
- **Best Runtime:** 2ms (C++)
- **Best Memory:** 8.7MB (C++)
- **Total Submissions:** 4
- **Accepted Submissions:** 3
