# 🚀 LeetCode #728 - Self Dividing Numbers

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given left and right integers, return all self-dividing numbers in the range [left, right]. A self-dividing number is divisible by every digit it contains.

---

## 🏆 Best Solution (JavaScript)

```javascript
var selfDividingNumbers = function(left, right) {
    let arr = [];
    for(let i = left; i <= right; i++){
        let n = i, check = true;
        if(n > 9){
            let temp = 0;
            while(n >= 1){
                temp = n % 10;
                n = parseInt(n / 10);
                if(i % temp != 0){ check = false; break; }
            }
            if(check) arr.push(i);
        }
        else arr.push(i);
    }
    return arr;
};
```

**Stats:** ⚡ 0ms | 💾 57.6MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/self-dividing-numbers/)