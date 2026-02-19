# 🚀 LeetCode #1363 - Greatest English Letter in Upper and Lower Case

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Greatest%20Letter-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given a string `s` of English letters, return the **greatest letter** that occurs in both uppercase and lowercase in `s`. Return in uppercase. If none exists, return empty string.

A letter `b` > `a` if `b` appears after `a` alphabetically.

---

## 💡 Intuition & Approach

### Descending Search
Search from 'Z' to 'A':
- ASCII 'A'-'Z': 65-90
- ASCII 'a'-'z': 97-122
- Difference: 32

For each letter (descending):
- Check if uppercase exists in string
- Check if lowercase exists in string
- Return first match

### Core Logic
```
for letter from 'Z' to 'A':
    if (uppercase exists AND lowercase exists):
        return uppercase letter
return ""
```

---

## 🎯 Key Insights

- Only need to check 26 letters
- Descending order ensures greatest letter found first
- ASCII difference between upper/lower is 32

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n × 26) ≈ O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: s = "lEeTcOdE"
Output: "E"
Both 'E' and 'e' exist, 'E' > 'L' ✓

Input: s = "arRazFif"
Output: "R"
Both 'R' and 'r' exist ✓

Input: s = "AbCdEfGhIjK"
Output: ""
No letter appears in both cases ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    for(let i = 90 ; i >= 65 ; i--){
        for(let j = 0 ; j < s.length ; j++){
            if(s.charCodeAt(j) == i){
                for(let k = 0 ; k < s.length ; k ++){
                    if(s.charCodeAt(k) == i + 32){
                        return s[j] ;
                    }
                }
            }
        }
    }
    return "" ;
};
```

**Stats:** ⚡ 8ms | 💾 56.4MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 2 |
| Accepted | 1 |
| Best Runtime | 8ms (JS) |
| Best Memory | 56.4MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
