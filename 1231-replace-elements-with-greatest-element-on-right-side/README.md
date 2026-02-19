# 🚀 LeetCode #1231 - Replace Elements with Greatest Element on Right Side

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Replace%20Elements-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an array `arr`, replace every element with the **greatest element among elements to its right**. The last element becomes `-1`.

Return the modified array.

---

## 💡 Intuition & Approach

### Right-to-Left Traversal
For each position, find maximum to its right:
- Start from rightmost, track running maximum
- Replace current with running maximum
- Update maximum if current is larger

### Core Logic
```
max = -1
for i from n-1 to 0:
    temp = arr[i]
    arr[i] = max
    max = max(max, temp)
```

---

## 🎯 Key Insights

- Process from right to left
- Track running maximum
- Last element is always -1

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
From right: -1→1→6→6→6→18 ✓

Input: arr = [400]
Output: [-1]
Single element → -1 ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        let max = -Infinity ;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(max < arr[j]){
                max = arr[j] ;
            }
        }
        arr[i] = max ;
    }
    arr[arr.length - 1] = -1 ;
    return arr ;
};
```

**Stats:** ⚡ 1417ms | 💾 64.9MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 3 |
| Accepted | 3 |
| Best Runtime | 1417ms (JS) |
| Best Memory | 64.9MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
