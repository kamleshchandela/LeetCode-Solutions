# 1910 - Check if Binary String Has at Most One Segment of Ones

**Difficulty:** Easy  
**Problem:** [check-if-binary-string-has-at-most-one-segment-of-ones](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/)

## Description

Given a binary string `s` without leading zeros, return `true` if `s` contains at most one contiguous segment of ones. Otherwise, return `false`.

## Examples

**Example 1:**
```
Input: s = "1001"
Output: false
```

**Example 2:**
```
Input: s = "110"
Output: true
```

## Constraints
- `1 <= s.length <= 100`
- `s[i]` is either '0' or '1'.
- `s[0]` is '1'.

## Approach

Check for multiple segments of ones.

### Algorithm
1. Check if there are any '0's followed by '1's after the first '1' segment

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Best Solution

**Runtime:** 0ms | **Memory:** 51.7MB (JavaScript)

```javascript
var checkOnesSegment = function(s) {
    for(let i = 0 ; i < s.length - 1 ; i++){
        if(s[i] == "0"){
            for(let j = 0 ; j < s.length - 1 ; j++){
                if(s[j] == "0" && s[j+1] != "0"){
                    for(let k = 0 ; k < s.length - 1 ; k++){
                        if (s[k] == "1" && s[k + 1] != "1"){
                            return false ;
                        }
                    }
                    return true ;
                }
            }
            return true ;
        }
    }
    return true ;
};
```

## Submission Statistics
- **Best Runtime:** 0ms (JavaScript)
- **Best Memory:** 51.7MB (JavaScript)
- **Total Submissions:** 5
- **Accepted Submissions:** 3
