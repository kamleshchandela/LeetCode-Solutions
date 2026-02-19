# 🚀 LeetCode #4008 - Restore Finishing Order

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given order and friends arrays, restore the finishing order based on given positions.

---

## 🏆 Best Solution (JavaScript)

```javascript
var recoverOrder = function(order, friends) {
    var arr = [], count = 0;
    for(let i = 0; i < order.length; i++){
        for(let j = 0; j < friends.length; j++){
            if(friends[j] == order[i]){
                arr[count] = friends[j];
                count++;
            }
        }
    }
    return arr;
};
```

**Stats:** ⚡ 1ms | 💾 58.3MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/restore-finishing-order/)