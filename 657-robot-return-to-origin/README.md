# 🚀 LeetCode #657 - Robot Return to Origin

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given a string moves, return true if the robot returns to origin (same number of 'U', 'D', 'L', 'R').

---

## 🏆 Best Solution (JavaScript)

```javascript
var judgeCircle = function(moves) {
    var x = 0, y = 0;
    for(let i = 0; i < moves.length; i++){
        if(moves[i] == "U") y = y + 1;
        else if(moves[i] == "D") y = y - 1;
        else if(moves[i] == "R") x = x + 1;
        else x = x - 1;
    }
    return x == 0 && y == 0;
};
```

**Stats:** ⚡ 6ms | 💾 56.4MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/robot-return-to-origin/)