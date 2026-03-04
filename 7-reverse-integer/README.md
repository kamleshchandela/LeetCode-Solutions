# 🚀 LeetCode #7 - Reverse Integer

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

---

## 📝 Problem Statement

Given a signed 32-bit integer x, return x with its digits reversed. If reversing causes overflow, return 0.

---

## 🏆 Best Solution (JavaScript)

```javascript
var reverse = function(x) {
    let temp = 0, check = false;
    if(x < 0){ x = -x; check = true; }
    while(x >= 1){
        temp = temp * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if(temp >= 2147483647 || temp <= -2147483647) return 0;
    return check ? -temp : temp;
};
```

**Stats:** ⚡ 54ms | 💾 55.7MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/reverse-integer/)