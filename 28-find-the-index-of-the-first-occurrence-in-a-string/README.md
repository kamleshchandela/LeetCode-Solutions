# 🚀 LeetCode #28 - Find the Index of the First Occurrence in a String

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-String%20Search-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given two strings `needle` and `haystack`, return the **index of the first occurrence** of `needle` in `haystack`, or `-1` if not found.

---

## 💡 Intuition & Approach

### Brute Force Search
Try matching needle at each position:
- For each index in haystack
- Check if needle matches starting from that position
- Return first match found

### Core Logic
```
for i in 0..haystack.length:
    if haystack[i..i+needle.length] == needle:
        return i
return -1
```

---

## 🎯 Key Insights

- Compare substring at each position
- Early termination on match
- O(n*m) worst case

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n × m) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
"sad" first appears at index 0 ✓

Input: haystack = "leetcode", needle = "leeto"
Output: -1
"leeto" not found in "leetcode" ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0 ; i < haystack.length ; i++){
        var check = 1 ;
        for(let j = 0 ; j < needle.length ; j++){
            if(haystack[i + j] != needle[j]){
                check = 0 ;
            }
        }
        if(check == 1){
            return i ;
        }
    }
    return -1 ;
};
```

**Stats:** ⚡ 608ms | 💾 54.3MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 3 |
| Accepted | 3 |
| Best Runtime | 608ms (JS) |
| Best Memory | 54.3MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
