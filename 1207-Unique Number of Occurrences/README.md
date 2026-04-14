# 🚀 LeetCode #1207 - Unique Number of Occurrences

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Unique%20Number%20of%20Occurrences-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Given an integer array `arr`, return `true` if there are no duplicate values in the array, otherwise return `false`.

---

## 💡 Intuition & Approach

### Approach
1. Use an object to count occurrences of each value
2. Store all occurrence counts in an array
3. Check if any two counts are equal - if so, return false

---

## 📊 Complexity Analysis

| Approach | Time | Space |
|----------|------|-------|
| Frequency Count | O(n) | O(n) |

---

## ✅ Test Cases

```
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 appears 3 times, 2 appears 2 times, 3 appears 1 time. All frequencies are unique.
```

---

## 🏆 Best Solution (JavaScript)

```javascript
var uniqueOccurrences = function(arr) {
    var obj = {};
    var arr1 = [];
    var count = 0;
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }
        else{
            obj[arr[i]] += 1;
        }
    }
    for(let i in obj){
        arr1[count] = obj[i];
        count++;
    }
    for(let i = 0; i < count - 1; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr1[i] == arr1[j] && i != j){
                return false;
            }
        }
    }
    return true;
};
```

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/unique-number-of-occurrences/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>