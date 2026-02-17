# 1960 - Check if the Sentence Is Pangram

**Difficulty:** Easy  
**Problem:** [check-if-the-sentence-is-pangram](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)

## Description

A **pangram** is a sentence where every letter of the English alphabet appears at least once.

Given a string `sentence` containing only lowercase English letters, return `true` if `sentence` is a pangram, or `false` otherwise.

## Examples

**Example 1:**
```
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
```

**Example 2:**
```
Input: sentence = "leetcode"
Output: false
```

## Constraints
- `1 <= sentence.length <= 1000`
- `sentence` consists of lowercase English letters.

## Approach

Set tracking: Check if all 26 letters are present.

### Algorithm
1. For each letter a-z, check if it exists in the sentence
2. If any letter is missing, return false
3. Otherwise, return true

## Complexity
- **Time:** O(26 * n) = O(n)
- **Space:** O(1)

## Best Solution

**Runtime:** 0ms | **Memory:** 8.8MB (C++)

```cpp
class Solution {
public:
    bool checkIfPangram(string sentence) {
        string s = "abcdefghijklmnopqrstuvwxyz" ;

        for(int i = 0 ; i < s.size() ; i++){
            int check = true ;
            for(int j = 0 ; j < sentence.size() ; j++){
                if(s[i] == sentence[j]){
                    check = false ;
                    break ;
                }
            }
            if(check){
                return false ;
            }
        }
        return true ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 0ms (C++)
- **Best Memory:** 8.8MB (C++)
- **Total Submissions:** 4
- **Accepted Submissions:** 3
