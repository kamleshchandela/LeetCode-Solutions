# 🚀 LeetCode #520 - Detect Capital

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given a word, return true if the usage of capitals is correct: all uppercase, all lowercase, or only first letter capitalized.

---

## 🏆 Best Solution (JavaScript)

```javascript
var detectCapitalUse = function(word) {
    let check = true;
    if(word[0].toUpperCase() == word[0]){
        for(let i = 1; i < word.length; i++){
            if(word[i].toUpperCase() == word[i]) check = true;
            else { check = false; break; }
        }
        if(check) return true;
        else {
            for(let i = 1; i < word.length; i++){
                if(word[i].toLowerCase() == word[i]) check = true;
                else { check = false; break; }
            }
            if(check) return true;
            return false;
        }
    }
    else{
        for(let i = 0; i < word.length; i++){
            if(word[i].toLowerCase() != word[i]) return false;
        }
        return true;
    }
};
```

**Stats:** ⚡ 0ms | 💾 54.7MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/detect-capital/)