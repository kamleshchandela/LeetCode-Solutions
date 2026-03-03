# 2341 - Count Prefixes of a Given String

**Difficulty:** Easy  
**Problem:** [LeetCode 2341](https://leetcode.com/problems/count-prefixes-of-a-given-string/)

## Problem Description

You are given a string array `words` and a string `s`, where `words[i]` and `s` comprise only of lowercase English letters.

Return the number of strings in `words` that are a prefix of `s`.

## Examples

**Example 1:**
```
Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3
```

**Example 2:**
```
Input: words = ["a","a"], s = "aa"
Output: 2
```

## Constraints
- `1 <= words.length <= 1000`
- `1 <= words[i].length, s.length <= 10`
- `words[i]` and `s` consist of lowercase English letters only.

## Approach

1. Iterate through each word in the array
2. Check if the word matches the prefix of s (character by character)
3. Count all matching words

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int countPrefixes(vector<string>& words, string s) {
        int count = 0;
        for(int i = 0; i < words.size(); i++){
            int check = true;
            for(int j = 0; j < words[i].size(); j++){
                if(words[i][j] != s[j]){
                    check = false;
                }
            }
            if(check){
                count++;
            }
        }
        return count;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n * m) where n is words.length and m is max word length
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 15.5 MB | C++ |
| 3 ms | 55.9 MB | JavaScript |
