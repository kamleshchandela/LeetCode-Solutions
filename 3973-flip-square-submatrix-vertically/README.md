# 🚀 LeetCode #3973 - Flip Square Submatrix Vertically

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

---

## 📝 Problem Statement

Given a 2D grid, flip a k x k submatrix starting at position (x, y) vertically.

---

## 🏆 Best Solution (JavaScript)

```javascript
var reverseSubmatrix = function(grid, x, y, k) {
    for(let i = 0; i < Math.floor(k / 2); i++){
        for(let j = y; j < y + k; j++){
            let temp = grid[x + i][j];
            grid[x + i][j] = grid[x + k - 1 - i][j];
            grid[x + k - 1 - i][j] = temp;
        }
    }
    return grid;
};
```

**Stats:** ⚡ 1ms | 💾 64.8MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/flip-square-submatrix-vertically/)