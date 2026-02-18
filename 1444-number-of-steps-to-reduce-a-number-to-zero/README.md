# 🚀 LeetCode #1444 - Number of Steps to Reduce a Number to Zero

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Reduce%20to%20Zero-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an integer `num`, return the **number of steps** to reduce it to zero.

In each step:
- If `num` is **even**: divide by 2
- If `num` is **odd**: subtract 1

---

## 💡 Intuition & Approach

### Iterative Reduction
Keep reducing until number becomes zero:
- Even numbers: `num /= 2` (divide by 2)
- Odd numbers: `num -= 1` (subtract 1)

### Core Logic
```
count = 0
while num > 0:
    if num % 2 == 0:
        num = num / 2
    else:
        num = num - 1
    count++
return count
```

---

## 🎯 Key Insights

- Each step reduces the number
- Division by 2 is efficient (halving)
- Time complexity is O(log n)

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(log n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: num = 14
Output: 6
14→7→6→3→2→1→0 ✓

Input: num = 8
Output: 4
8→4→2→1→0 ✓

Input: num = 123
Output: 12
123→122→61→60→30→15→14→7→6→3→2→1→0 ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    int numberOfSteps(int num) {
        int count = 0 ;
        while (num != 0){
            if(num % 2 == 0){
                num = num / 2 ;
            }
            else{
                num = num - 1 ;
            }
            count ++ ;
        }
        return count ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 8MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 2 |
| Accepted | 2 |
| Best Runtime | 0ms (C++) |
| Best Memory | 8MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
