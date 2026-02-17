# 🚀 LeetCode #742 - To Lower Case

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-To%20Lower%20Case-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given a string `s`, return the string after **replacing every uppercase letter with the same lowercase letter**.

---

## 💡 Intuition & Approach

### Character-by-Character Conversion
- ASCII range for uppercase: 65 (A) to 90 (Z)
- ASCII range for lowercase: 97 (a) to 122 (z)
- Difference: 32 (add 32 to uppercase to get lowercase)

### Core Logic
```
for each character c in s:
    if 'A' <= c <= 'Z':
        c = chr(ord(c) + 32)
    append to result
```

---

## 🎯 Key Insights

- JavaScript has built-in `toLowerCase()` but manual works too
- ASCII difference between upper and lower is 32
- Characters other than letters remain unchanged

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(n) |

---

## ✅ Test Cases

```
Input: s = "Hello"
Output: "hello" ✓

Input: s = "here"
Output: "here" ✓

Input: s = "LOVELY"
Output: "lovely" ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    var ans = "" ;
    for(let i = 0 ; i < s.length ; i++){
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
            var value = s.charCodeAt(i) + 32 ; 
            ans = ans + String.fromCharCode(value) ; 
        }
        else{
            ans = ans + s[i] ; 
        }
    }
    return ans ;
};
```

**Stats:** ⚡ 0ms | 💾 53.3MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 0ms (JS) |
| Best Memory | 53.3MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/to-lower-case/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
