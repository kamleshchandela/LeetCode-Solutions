# 🚀 LeetCode #20 - Valid Parentheses

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Valid%20Parentheses-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-March%202026-orange)

---

## 📝 Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is **valid**.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets
2. Open brackets must be closed in the correct order
3. Every close bracket has a corresponding open bracket

---

## 💡 Intuition & Approach

### Stack-Based Matching
Use a stack to track opening brackets:
- Push opening brackets onto stack
- When closing bracket found, check if top of stack matches
- Stack must be empty at the end

### Core Logic
```
for each character c in s:
    if c is opening bracket:
        push to stack
    else:
        if stack empty → invalid
        if top doesn't match → invalid
        pop from stack
return stack is empty
```

---

## 🎯 Key Insights

- Stack ensures correct order of brackets
- Each closing bracket must match the most recent opening
- Empty stack at end = all brackets matched

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(n) |

---

## ✅ Test Cases

```
Input: s = "()"
Output: true ✓

Input: s = "()[]{}"
Output: true ✓

Input: s = "(]"
Output: false
Mismatched brackets ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    bool isValid(string s) {
        vector<char> arr ;
        for(int i = 0 ; i < s.size() ; i++){
            if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
                arr.push_back(s[i]) ;
            }
            else{
                if(arr.empty())return false ;
                char temp = arr.back() ; 
                arr.pop_back() ;
                if(s[i] == ')' && temp != '('){
                    return false ;
                }
                else if(s[i] == ']' && temp != '['){
                    return false ;
                }
                else if(s[i] == '}' && temp != '{'){
                    return false ;
                }
            }
        }
        return arr.size() == 0 ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 8.9MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 6 |
| Accepted | 4 |
| Best Runtime | 0ms (C++) |
| Best Memory | 8.9MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/valid-parentheses/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
