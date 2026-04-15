# 205 - Isomorphic Strings

**Difficulty:** Easy  
**Problem:** https://leetcode.com/problems/isomorphic-strings/

---

## Description

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

---

## Examples

**Example 1:**  
Input: s = "egg", t = "add"  
Output: true  
Explanation:  
The strings s and t can be made identical by:  
Mapping 'e' to 'a'.  
Mapping 'g' to 'd'.  

**Example 2:**  
Input: s = "f11", t = "b23"  
Output: false  
Explanation:  
The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.  

**Example 3:**  
Input: s = "paper", t = "title"  
Output: true  

---

## Constraints

- 1 <= s.length <= 5 * 10^4  
- t.length == s.length  
- s and t consist of any valid ASCII character  

---

## Intuition & Approach

We need to ensure a one-to-one mapping between characters of s and t.

### Algorithm
1. Create two hash maps:
   - One for mapping s → t
   - One for mapping t → s
2. Traverse both strings together
3. If a character is already mapped, check consistency
4. If mapping conflicts, return false
5. Otherwise, store the mapping
6. If all checks pass, return true

---

## Key Insights

- Mapping must be bijective (one-to-one and onto)
- Use two maps to avoid duplicate mappings
- unordered_map gives O(1) average operations
- Single pass solution is optimal

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| Time   | O(n)      |
| Space  | O(1)      |

---

## Test Cases

| Input | Output |
|-------|--------|
| "egg", "add" | true |
| "f11", "b23" | false |
| "paper", "title" | true |
| "ab", "aa" | false |

---

## Best Solution

```cpp
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        unordered_map<char , char> m1 , m2 ;

        for(int i = 0 ; i < s.size() ; i++){
            if(m1.count(s[i]) && m1[s[i]] != t[i]) return false;
            if(m2.count(t[i]) && m2[t[i]] != s[i]) return false;

            m1[s[i]] = t[i];
            m2[t[i]] = s[i];
        }
        return true;
    }
};
```

**Runtime:** 0ms  
**Memory:** 54.5MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-04-15 10:35:40 | **Accepted** | **0ms** | **54.5MB** |

---

## Related Problems

- [242 - Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)
- [290 - Word Pattern](https://leetcode.com/problems/hamming-distance/)

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)