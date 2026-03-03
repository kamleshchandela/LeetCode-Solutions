# 2292 - Counting Words With a Given Prefix

**Difficulty:** Easy  
**Problem:** [LeetCode 2292](https://leetcode.com/problems/counting-words-with-a-given-prefix/)

## Problem Description

You are given an array of strings `words` and a string `pref`.

Return the number of strings in `words` that contain `pref` as a prefix.

A prefix of a string `s` is any leading contiguous substring of `s`.

## Examples

**Example 1:**
```
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
```

**Example 2:**
```
Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
```

## Constraints
- `1 <= words.length <= 100`
- `1 <= words[i].length, pref.length <= 100`
- `words[i]` and `pref` consist of lowercase English letters.

## Approach

1. Iterate through each word
2. Check if the prefix matches the beginning of the word
3. Count all matching words

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int prefixCount(vector<string>& words, string pref) {
        int count = 0;
        for(int i = 0; i < words.size(); i++){
            bool check = true;
            if(words[i].size() < pref.size()){
                continue;
            }
            for(int j = 0; j < pref.size(); j++){
                if(words[i][j] != pref[j]){
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
- **Time Complexity:** O(n * m) where n is words.length and m is pref.length
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 13.2 MB | C++ |
| 3 ms | 56.3 MB | JavaScript |
