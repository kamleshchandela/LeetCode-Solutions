# 🚀 LeetCode #1904 - Second Largest Digit in a String

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Second%20Largest%20Digit-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an alphanumeric string `s` (lowercase letters and digits), return the **second largest numerical digit** that appears in `s`, or `-1` if it doesn't exist.

---

## 💡 Intuition & Approach

### Track Two Maximums
Find the largest and second largest digits:
- Initialize max1 = -1, max2 = -1
- Extract digits and update maximums
- Ensure max2 < max1 < current digit

### Core Logic
```
max1 = -1  // largest
max2 = -1  // second largest

for each digit in s:
    if digit > max1:
        max2 = max1
        max1 = digit
    else if digit > max2 and digit < max1:
        max2 = digit

return max2
```

---

## 🎯 Key Insights

- Only 10 possible digits (0-9)
- Track top two distinct values
- Return -1 if less than 2 distinct digits

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: s = "dfa12321afd"
Output: 2
Digits: [1, 2, 3, 2, 1, 2, 1]
Largest: 3, Second: 2 ✓

Input: s = "abc1111"
Output: -1
Only digit is 1, no second largest ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    int secondHighest(string s) {
        int max1 = -1 ; 
        int max2 = -1 ;
        for(int i = 0 ; i < s.size() ; i++){
            for(int j = 0 ; j < s.size() ; j++){
                if(max1 < int(s[j] - 48) && int(s[j] - 48) < 10 ){
                    max2 = max1 ;
                    max1 = int(s[j] - 48) ;
                }
                else if (max2 < int(s[j] - 48) && int(s[j] - 48) < max1 && int(s[j] - 48) < 10){
                    max2 = int(s[j] - 48) ;
                }
            }
        } 
        return max2 ;
    }
};
```

**Stats:** ⚡ 47ms | 💾 9.3MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 2 |
| Accepted | 2 |
| Best Runtime | 47ms (C++) |
| Best Memory | 9.3MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/second-largest-digit-in-a-string/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
