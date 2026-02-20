# 2128 - Reverse Prefix of Word

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/reverse-prefix-of-word/)

---

## Description

Given a 0-indexed string `word` and a character `ch`, reverse the segment of `word` that starts at index 0 and ends at the index of the first occurrence of `ch` (inclusive). If the character `ch` does not exist in `word`, do nothing.

---

## Examples

**Example 1:**
```
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: Reverse "abcd" to "dcba", keep the rest "efd".
```

**Example 2:**
```
Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: Reverse "xyxz" to "zxyx", keep "xe".
```

**Example 3:**
```
Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: ch not found, return original word.
```

---

## Constraints

- `1 <= word.length <= 250`
- `word` consists of lowercase English letters.
- `ch` is a lowercase English letter.

---

## Intuition & Approach

We need to find the first occurrence of character `ch` and reverse the prefix up to that index.

### Algorithm
1. Find the first occurrence of `ch` in `word` using linear search
2. If not found, return the original word
3. Build result by:
   - Appending characters from index 0 to found index in reverse
   - Appending the remaining characters from index+1 to end

---

## Key Insights

- Only the prefix up to (and including) the first occurrence is reversed
- If `ch` doesn't exist, return the original word unchanged
- Using string concatenation builds the result efficiently

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n) |
| **Space** | O(n) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `"abcdefd", "d"` | `"dcbaefd"` |
| `"xyxzxe", "z"` | `"zxyxxe"` |
| `"abcd", "z"` | `"abcd"` |
| `"a", "a"` | `"a"` |

---

## Best Solution

```cpp
class Solution {
public:
    string reversePrefix(string word, char ch) {
        int count = 0 ;
        for(int i = 0 ; i < word.size() ; i++){
            if(word[i] == ch){
                count = i ;
                break ;
            }
        }
        string s = "" ;
        for(int i = count ; i >= 0 ; i --){
            s = s + word[i] ;
        }
        for(int i = count + 1 ; i < word.size() ; i++){
            s = s + word[i] ;
        }
        return s ;
    }
};
```

**Runtime:** 3ms  
**Memory:** 9.3MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 01:12:51 | **Accepted** | **1ms** | **53.9MB** (JS) |
| 2 | 2026-02-21 01:13:56 | Accepted | 3ms | 9.3MB (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)