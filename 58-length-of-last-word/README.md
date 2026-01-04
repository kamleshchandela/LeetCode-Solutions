# 58 - Length of Last Word

**Difficulty:** Easy  
**Link:** [length-of-last-word](https://leetcode.com/problems/length-of-last-word/)

## Description

Given a string `s` consisting of words and spaces, return the length of the **last** word in the string.

A **word** is a maximal substring consisting of non-space characters only.

## Examples

**Example 1:**
```
Input: s = "Hello World"
Output: 5
```

**Example 2:**
```
Input: s = "   fly me   to   the moon  "
Output: 4
```

**Example 3:**
```
Input: s = "luffy is still joyboy"
Output: 6
```

## Constraints
- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.

## Approach

Traverse the string from right to left. Count characters until a space is encountered after counting has started, then return the count.

## Solution (JavaScript)

```javascript
var lengthOfLastWord = function(s) {
    var count = 0 ; 
    for(let i = s.length - 1  ; i >= 0 ; i--){
        
        if(s.length == 1 && s[0] != " "){
            return 1 ;
        }
        if(s[i] != " "){
            count ++ ;
        }
       
        else if (count > 0){
            return count ;
        }

        if (i == 0){
            return count ;
        }

    }
};
```

## Complexity Analysis

| Metric | Complexity |
|--------|------------|
| **Time** | O(n) where n is the length of the string |
| **Space** | O(1) |

## Submission Stats

| Language | Runtime | Memory |
|----------|---------|--------|
| JavaScript | 0ms | 54.1MB |
