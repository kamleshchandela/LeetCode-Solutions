# 2977 - Check if a String Is an Acronym of Words

**Difficulty:** Easy  
**Problem:** [LeetCode 2977](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/)

## Problem Description

Given an array of strings `words` and a string `s`, determine if `s` is an acronym of words.

The string `s` is considered an acronym of `words` if it can be formed by concatenating the first character of each string in `words` in order.

Return `true` if `s` is an acronym of `words`, and `false` otherwise.

## Examples

**Example 1:**
```
Input: words = ["alice","bob","charlie"], s = "abc"
Output: true
```

**Example 2:**
```
Input: words = ["an","apple"], s = "a"
Output: false
```

**Example 3:**
```
Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
Output: true
```

## Constraints
- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `1 <= s.length <= 100`
- `words[i]` and `s` consist of lowercase English letters.

## Approach

1. Check if lengths match first
2. Compare first character of each word with corresponding character in s
3. Return false if any mismatch

## Solution (JavaScript - Best)

```javascript
var isAcronym = function(words, s) {
    if(words.length == s.length){
        for(let i = 0; i < words.length; i++){
            if(words[i][0] !== s[i]){
                return false;
            }
        }
    }
    else{
        return false;
    }
    return true;
};
```

## Complexity Analysis
- **Time Complexity:** O(n) where n is length of words
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 2 ms | 58.1 MB | JavaScript |
| 2 ms | 58.2 MB | JavaScript |
| 4 ms | 43.5 MB | C++ |
