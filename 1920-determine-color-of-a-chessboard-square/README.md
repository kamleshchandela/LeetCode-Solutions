# 🚀 LeetCode #1920 - Determine Color of a Chessboard Square

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Chessboard%20Color-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given a chessboard coordinate (e.g., "a1", "h3"), return `true` if the square is **white**, and `false` if it's **black**.

---

## 💡 Intuition & Approach

### Chessboard Pattern
Standard chessboard:
- **a1 is black** (bottom-left is black)
- Alternating pattern: adjacent squares have opposite colors

### Color Determination
White squares occur when:
- **Column is odd (b,d,f,h)** AND **row is odd**
- **Column is even (a,c,e,g)** AND **row is even**

### Core Logic
```
White if:
  (col is odd AND row is odd) OR
  (col is even AND row is even)
```

---

## 🎯 Key Insights

- Chessboard follows alternating pattern
- Sum of column index + row index parity determines color
- a1 is black, so white squares have opposite parity

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(1) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: coordinates = "a1"
Output: false
a1 is black ✓

Input: coordinates = "h3"
Output: true
h3 is white ✓

Input: coordinates = "c7"
Output: false
c7 is black ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    bool squareIsWhite(string coordinates) {
        char s1[4] = {'a' , 'c' , 'e' , 'g'} ;
        char s2[4] = {'b' , 'd' , 'f' , 'h'} ;

        for(int i = 0 ; i < 4 ; i++){
            if((coordinates[0] == s2[i] && int(coordinates[1]) % 2 == 1) || (coordinates[0] == s1[i] &&
            int(coordinates[1]) % 2 == 0)){
                return true ;
            }
        }
        return false ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 7.7MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 2 |
| Accepted | 2 |
| Best Runtime | 0ms (C++) |
| Best Memory | 7.7MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/determine-color-of-a-chessboard-square/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
