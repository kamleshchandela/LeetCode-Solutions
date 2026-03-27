# 2654 - Count the Number of Vowel Strings in Range

**Difficulty:** Easy  
**Problem:** [LeetCode 2654](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/)

## Problem Description

You are given a 0-indexed array of string `words` and two integers `left` and `right`.

A string is called a vowel string if it starts with a vowel character and ends with a vowel character (a, e, i, o, u).

Return the number of vowel strings `words[i]` where `i` belongs to the inclusive range `[left, right]`.

## Examples

**Example 1:**
```
Input: words = ["are","amy","u"], left = 0, right = 2
Output: 2
```

**Example 2:**
```
Input: words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
Output: 3
```

## Constraints
- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 10`
- `words[i]` consists of only lowercase English letters.
- `0 <= left <= right < words.length`

## Approach

1. Iterate through words in the range [left, right]
2. Check if the first and last characters are vowels
3. Count valid vowel strings

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int vowelStrings(vector<string>& words, int left, int right) {
        int count = 0;
        for(int i = left; i <= right; i++){
            int l = words[i].size() - 1;
            if((words[i][0] == 'a' || words[i][0] == 'e' || words[i][0] == 'i' || words[i][0] == 'o' || words[i][0] == 'u') &&
               (words[i][l] == 'a' || words[i][l] == 'e' || words[i][l] == 'i' || words[i][l] == 'o' || words[i][l] == 'u')){
                count++;
            }
        }
        return count;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(right - left)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 36.6 MB | C++ |
| 1 ms | 59 MB | JavaScript |
