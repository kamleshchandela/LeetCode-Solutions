# 🚀 LeetCode #2254 - Check if Every Row and Column Contains All Numbers

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Matrix%20Validation-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

An `n x n` matrix is **valid** if every row and column contains all integers from `1` to `n`. Given the matrix, return `true` if valid, `false` otherwise.

---

## 💡 Intuition & Approach

### Row and Column Validation
For each row and column, check for duplicates:
- A valid row/column has all numbers 1 to n exactly once
- Check for any duplicate values

### Core Logic
```
Check rows:
    for each row:
        for each pair of elements:
            if duplicate found → return false

Check columns:
    for each column:
        for each pair of elements:
            if duplicate found → return false

return true
```

---

## 🎯 Key Insights

- Each row/column must have numbers 1 to n
- Duplicates violate the constraint
- Need to check both rows and columns

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n³) naive, O(n²) optimal |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Each row/column has 1,2,3 ✓

Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
Output: false
First row has duplicate 1s ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    bool checkValid(vector<vector<int>>& matrix) {
        for(int i = 0 ; i < matrix.size() ; i++){
            for(int j = 0 ; j < matrix.size() ; j ++){
                for(int k = 0 ; k < matrix.size() ; k++){
                    if(matrix[i][j] == matrix[i][k] && j != k && matrix[i][j] <= matrix.size() && matrix[i][k] <= matrix.size()){
                        return false ;
                    }
                }
            }
        }

        for(int i = 0 ; i < matrix.size() ; i++){
            for(int j = 0 ; j < matrix.size() ; j++){
                for(int k = 0 ; k < matrix.size() ; k++ ){
                    if(matrix[j][i] == matrix[k][i] && j != k && matrix[j][i] <= matrix.size() && matrix[k][i] <= matrix.size()){
                        return false ;
                    }
                }
            }
        }

        return true ;
    }
};
```

**Stats:** ⚡ 105ms | 💾 38.4MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 3 |
| Accepted | 2 |
| Best Runtime | 99ms (JS) |
| Best Memory | 62.1MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
