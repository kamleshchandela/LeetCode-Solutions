# 🚀 LeetCode #3811 - Reverse Degree of a String

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge-Problem-Reverse%20Degree%20of%20a%20String-blue)
![Last Updated](https://img.shields.io/badge-Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Given a string `s` consisting of lowercase English letters, return the reverse degree of `s`.

The reverse degree is calculated as:
- For each character, its position value is (26 - (character - 'a' + 1))
- Sum all position values multiplied by their 1-based index

---

## 🏆 Best Solution (JavaScript)

```javascript
var reverseDegree = function(s) {
    var obj = {} ;
    var str = "abcdefghijklmnopqrstuvwxyz" ;
    for(let i = 0 ; i < str.length ; i++){
        obj[str[str.length - 1 - i]] = i + 1 ;
    }
    var sum = 0 ; 
    for(let i = 0 ; i < s.length ; i++){
        sum = sum + obj[s[i]] * (i + 1) ;
    }
    return sum ;
};
```

**Stats:** ⚡ 5ms | 💾 57.7MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/reverse-degree-of-a-string/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>