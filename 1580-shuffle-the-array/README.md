# 🚀 LeetCode #1580 - Shuffle the Array

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Shuffle%20Array-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`, return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.

---

## 💡 Intuition & Approach

### Two-Pointer Interleaving
Split the array into two halves and interleave them:
- **First half (x)**: Elements at indices 0 to n-1
- **Second half (y)**: Elements at indices n to 2n-1
- Alternate between taking from x and y

### Core Logic
```
result[i] = nums[i/2]           if i is even
result[i] = nums[n + i/2]       if i is odd
```

---

## 🎯 Key Insights

- Array is guaranteed to have even length (2n)
- Simple interleaving operation
- No additional data structures needed beyond result array

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(n) |

---

## ✅ Test Cases

```
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
x = [2,5,1], y = [3,4,7] → interleaved

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var arr = [] ;
    var x = 0 ;
    var y = n ;
    var z = 1 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(z==1){
            arr[i] = nums[x] ;
            x++ ;
            z = 0 ;
        }
        else{
            arr[i] = nums[y] ;
            y++ ;
            z = 1 ;
        }
    }
    return arr ;
};
```

**Stats:** ⚡ 46ms | 💾 58.1MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 2 |
| Accepted | 2 |
| Best Runtime | 46ms (JS) |
| Best Memory | 58.1MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/shuffle-the-array/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
