# 242 - Valid Anagram

**Difficulty:** Easy  
**Problem:** [LeetCode 242](https://leetcode.com/problems/valid-anagram/)

## Problem Description

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

## Examples

**Example 1:**
```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**
```
Input: s = "rat", t = "car"
Output: false
```

## Constraints
- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

## Approach

1. Check if lengths match
2. Build character frequency maps for both strings
3. Compare the maps

## Solution (JavaScript)

```javascript
var isAnagram = function(s, t) {
    let obj1 = {};
    let obj2 = {};
    if(s.length == t.length){
        for(let i = 0; i < s.length; i++){
            if(!obj1[s[i]]){
                obj1[s[i]] = 1;
            }
            else{
                obj1[s[i]] += 1;
            }
            if(!obj2[t[i]]){
                obj2[t[i]] = 1;
            }
            else{
                obj2[t[i]] += 1;
            }
        }
        let check = true;
        for(let i in obj1){
            if(obj1[i] != obj2[i]){
                check = false;
                break;
            }
        }
        if(check){
            return true;
        }
        return false;
    }
    return false;
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1) - bounded by alphabet size

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 11 ms | 57.5 MB | JavaScript |
