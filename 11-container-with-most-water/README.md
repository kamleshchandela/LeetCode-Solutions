# 🚀 LeetCode #11 - Container With Most Water

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Problem](https://img.shields.io/badge/Problem-Container%20With%20Most%20Water-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an array `height` representing vertical lines, find two lines that together with the x-axis form a container that holds the most water.

Return the **maximum amount of water** a container can store.

---

## 💡 Intuition & Approach

### Two-Pointer Technique
Start with widest container (ends) and move inward:
- Area = `min(height[l], height[r]) × (r - l)`
- Move the pointer with smaller height
- This ensures we don't miss potentially larger areas

### Core Logic
```
l = 0, r = n - 1
while l < r:
    area = min(height[l], height[r]) * (r - l)
    maxArea = max(maxArea, area)
    if height[l] < height[r]:
        l++
    else:
        r--
```

---

## 🎯 Key Insights

- Start from extremes for maximum width
- Moving smaller height is safe (larger might still form larger area)
- Greedy approach finds optimal solution

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Max area with heights 8 and 7 ✓

Input: height = [1,1]
Output: 1
Only one container possible ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int max = -2147483648 ;
        int l = 0 ;
        int r = height.size() - 1 ;
        while(l < r){
            int length = r - l ;
            if(max < min(height[l],height[r]) * length){
                max = min(height[l],height[r]) * length ;
            }
            if(height[l] < height[r]){
                l ++ ;
            }
            else{
                r -- ;
            }
        }
        return max ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 62.9MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 7 |
| Accepted | 4 |
| Best Runtime | 0ms (C++) |
| Best Memory | 62.9MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/container-with-most-water/)
- [Related: Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
