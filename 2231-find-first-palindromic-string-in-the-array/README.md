# 🚀 LeetCode #2231 - Find First Palindromic String in the Array

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-First%20Palindrome-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an array of strings `words`, return the **first palindromic string** in the array. If there is no such string, return an empty string `""`.

A string is **palindromic** if it reads the same forward and backward.

---

## 💡 Intuition & Approach

### Linear Scan with Two-Pointer Check
For each word, check if it's a palindrome:
1. Compare first and last character
2. Move inward until middle
3. Return first palindrome found

### Palindrome Check Logic
```
left = 0, right = length - 1
while left < right:
    if word[left] != word[right]:
        return false
    left++, right--
return true
```

---

## 🎯 Key Insights

- Return the **first** palindrome, not all of them
- Early termination saves time
- Single pass through array, early exit on match

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n × m) where n = array length, m = avg word length |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: "ada" is the first palindrome ✓

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: "racecar" is palindrome ✓

Input: words = ["def","ghi"]
Output: ""
Explanation: No palindrome found ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0 ; i < words.length ; i++){
        var check = true ;
        for(let j = 0 ;  j < words[i].length ; j++){
            if(words[i][j] != words[i][words[i].length - 1 - j]){
                check = false ;
                break ;
            }
        }
        if(check){
            return words[i] ;
        }
    }
    return "" ;
};
```

**Stats:** ⚡ 1ms | 💾 57.6MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 2 |
| Accepted | 2 |
| Best Runtime | 1ms (JS) |
| Best Memory | 57.6MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
