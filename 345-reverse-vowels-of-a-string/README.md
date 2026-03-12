# 345 - Reverse Vowels of a String

**Difficulty:** Easy  
**Problem:** [LeetCode 345](https://leetcode.com/problems/reverse-vowels-of-a-string/)

## Problem Description

Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', 'u' (both lower and upper cases).

## Examples

**Example 1:**
```
Input: s = "IceCreAm"
Output: "AceCreIm"
```

**Example 2:**
```
Input: s = "leetcode"
Output: "leotcede"
```

## Constraints
- `1 <= s.length <= 3 * 10^5`
- `s` consists of printable ASCII characters.

## Approach

1. Collect all vowels in order
2. Iterate through string and replace vowels with vowels from the end

## Solution (JavaScript - Best)

```javascript
var reverseVowels = function(s) {
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U"){
            arr.push(s[i]);
        }
    }
    let count = 0;
    let str = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U"){
            str = str + arr[arr.length - 1 - count];
            count++;
        }
        else{
            str = str + s[i];
        }
    }
    return str;
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 12 ms | 61.9 MB | JavaScript |
