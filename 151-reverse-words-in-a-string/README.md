# 151 - Reverse Words in a String

**Difficulty:** Medium  
**Problem:** [LeetCode 151](https://leetcode.com/problems/reverse-words-in-a-string/)

## Problem Description

Given an input string `s`, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Examples

**Example 1:**
```
Input: s = "the sky is blue"
Output: "blue is sky the"
```

**Example 2:**
```
Input: s = "  hello world  "
Output: "world hello"
```

**Example 3:**
```
Input: s = "a good   example"
Output: "example good a"
```

## Constraints
- `1 <= s.length <= 10^4`
- `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`.
- There is at least one word in `s`.

## Approach

**Reverse Traversal:**
1. Traverse the string from right to left
2. When encountering a space, add the word that was just traversed
3. Handle the first word (at index 0) separately
4. Remove any leading space from the result

## Solution (C++ - Best)

```cpp
class Solution {
public:
    string reverseWords(string s) {
        string str = "";
        for(int i = s.size() - 1; i >= 0; i--){
            if(s[i] == ' '){
                int j = i + 1;
                while(j < s.size() && s[j] != ' '){
                    str = str + s[j];
                    j++;
                }
                if(i > 0 && s[i-1] != ' '){
                    str = str + ' ';
                }
            }
            if(i == 0 && s[i] != ' '){
                int j = i;
                while(j < s.size() && s[j] != ' '){
                    str = str + s[j];
                    j++;
                }
            }
        }
        string s1 = "";
        if(str[0] == ' '){
            for(int i = 1; i < str.size(); i++){
                s1 = s1 + str[i];
            }
            return s1;
        }
        return str;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n) - for result string

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 34 ms | 98.2 MB | C++ |
| 39 ms | 98.3 MB | C++ |
| 43 ms | 98.4 MB | C++ |
| 46 ms | 98.5 MB | C++ |
| 8 ms | 60 MB | JavaScript |
