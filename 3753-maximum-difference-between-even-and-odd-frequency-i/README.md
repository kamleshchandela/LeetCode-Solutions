# 🚀 LeetCode #3753 - Maximum Difference Between Even and Odd Frequency I

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

You are given a string `s`. The score of a string is the maximum difference between the count of the most frequent and least frequent characters. Return the score of the string.

---

## 🏆 Best Solution (JavaScript)

```javascript
var maxDifference = function(s) {
    let e1 = -Infinity, e2 = Infinity, o1 = -Infinity, o2 = Infinity;
    for(let i = 0; i < s.length; i++) {
        let count = 0; 
        for(let j = 0; j < s.length; j++){
            if(s[i] == s[j]) count++;
        }    
        if(count % 2 == 0) {
            if(e1 < count) e1 = count;
            if(e2 > count) e2 = count;
        } else {
            if(o1 < count) o1 = count;
            if(o2 > count) o2 = count;
        }
    }
    let a = o1 > o2 ? o1 : o2;
    let b = e1 > e2 ? e2 : e1;
    return a - b;
};
```

**Stats:** ⚡ 5ms | 💾 55.6MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/)