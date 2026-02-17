# 3194 - Find Words Containing Character

**Difficulty:** Easy  
**Problem:** [LeetCode 3194](https://leetcode.com/problems/find-words-containing-character/)

## Problem Description

You are given a 0-indexed array of strings `words` and a character `x`.

Return an array of indices representing the words that contain the character `x`.

## Examples

**Example 1:**
```
Input: words = ["leet","code"], x = "e"
Output: [0,1]
```

**Example 2:**
```
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
```

**Example 3:**
```
Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
```

## Constraints
- `1 <= words.length <= 50`
- `1 <= words[i].length <= 50`
- `x` is a lowercase English letter.
- `words[i]` consists only of lowercase English letters.

## Approach

1. Iterate through each word
2. Check if the character exists in the word
3. Add index to result if found

## Solution (JavaScript)

```javascript
var findWordsContaining = function(words, x) {
    var arr = [];
    var k = 0;
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(words[i][j] == x){
                arr[k] = i;
                k++;
                break;
            }
        }
    }
    return arr;
};
```

## Complexity Analysis
- **Time Complexity:** O(n * m) where n is words.length and m is max word length
- **Space Complexity:** O(k) where k is number of matching words

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 2 ms | 57.6 MB | JavaScript |
