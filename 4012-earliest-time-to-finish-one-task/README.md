# 🚀 LeetCode #4012 - Earliest Time to Finish One Task

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given a 2D array tasks where each task has two values, return the minimum total time to complete any one task.

---

## 🏆 Best Solution (JavaScript)

```javascript
var earliestTime = function(tasks) {
    var min = Infinity;
    for(let i = 0; i < tasks.length; i++){
        var sum = 0; 
        for(let j = 0; j < tasks[i].length; j++) sum = sum + tasks[i][j];
        if(min > sum) min = sum;
    }
    return min;
};
```

**Stats:** ⚡ 2ms | 💾 57.2MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/earliest-time-to-finish-one-task/)