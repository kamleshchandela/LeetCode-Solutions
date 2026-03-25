# 1894 - Merge Strings Alternately

**Difficulty:** Easy  
**Problem:** [LeetCode 1894](https://leetcode.com/problems/merge-strings-alternately/)

## Problem Description

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

## Examples

**Example 1:**
```
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
```

**Example 2:**
```
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
```

**Example 3:**
```
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
```

## Constraints
- `1 <= word1.length, word2.length <= 100`
- `word1` and `word2` consist of lowercase English letters.

## Approach

1. Use two pointers, one for each string
2. Alternate adding characters from each string
3. When one string ends, append remaining characters from the other

## Solution (C++ - Best)

```cpp
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int i = 0;
        int j = 0;
        int k = 0;
        bool check = true;
        string s = "";
        while(k < word1.size() + word2.size() - 1){
            if(i < word1.size() && check == true){
                s = s + word1[i];
                i++;
                check = false;
            }
            else if(j < word2.size() && check == false){
                s = s + word2[j];
                j++;
                check = true;
            }
            if(i == word1.size() || j == word2.size()){
                break;
            }
            k++;
        }
        if(i == word1.size()){
            for(int l = j; l < word2.size(); l++){
                s = s + word2[j];
                j++;
            }
        }
        if(j == word2.size()){
            for(int l = i; l < word1.size(); l++){
                s = s + word1[i];
                i++;
            }
        }
        return s;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(m + n)
- **Space Complexity:** O(m + n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 6 ms | 9.7 MB | C++ |
| 39 ms | 53.5 MB | JavaScript |
| 50 ms | 54 MB | JavaScript |
