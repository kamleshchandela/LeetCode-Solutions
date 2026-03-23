# 2053 - Check if All Characters Have Equal Number of Occurrences

**Difficulty:** Easy  
**Problem:** [check-if-all-characters-have-equal-number-of-occurrences](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/)

## Description

Given a string `s`, return `true` if `s` is a good string, or `false` otherwise.

A string `s` is good if all the characters that appear in `s` have the same number of occurrences.

## Examples

**Example 1:**
```
Input: s = "abacbc"
Output: true
```

**Example 2:**
```
Input: s = "aaabb"
Output: false
```

## Constraints
- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.

## Approach

Count occurrences and compare.

### Algorithm
1. Count occurrences of each character
2. Check if all characters have the same frequency

## Complexity
- **Time:** O(n)
- **Space:** O(n)

## Best Solution

**Runtime:** 2ms | **Memory:** 54.7MB (JavaScript)

```javascript
var areOccurrencesEqual = function(s) {
    let obj = {} ;
    for(let i = 0 ; i < s.length ; i++){
        if(!obj[s[i]]){
            obj[s[i]] = 1 ;
        }
        else{
            obj[s[i]] += 1 ;
        }
    }
    let check = obj[s[0]] ; 
    for(let i in obj){
        if(obj[i] != check){
            return false ;
        }
    }
    return true ;
};
```

## Submission Statistics
- **Best Runtime:** 1ms (C++)
- **Best Memory:** 9.6MB (C++)
- **Total Submissions:** 6
- **Accepted Submissions:** 5
