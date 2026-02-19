# 🚀 LeetCode #1635 - Number of Good Pairs

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Good%20Pairs-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an array `nums`, return the number of **good pairs**.

A pair `(i, j)` is **good** if:
- `nums[i] == nums[j]`
- `i < j`

---

## 💡 Intuition & Approach

### Count Matching Pairs
For each pair where values match:
- Brute force: Check all pairs (i, j) where i < j
- Hash map: Count frequency and calculate combinations

### Core Logic
```
count = 0
for i in 0..n-1:
    for j in i+1..n-1:
        if nums[i] == nums[j]:
            count++
return count
```

---

## 🎯 Key Insights

- Count pairs with same values
- i < j ensures no duplicates
- n*(n-1)/2 maximum for all same values

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n²) or O(n) with hash map |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: nums = [1,2,3,1,1,3]
Output: 4
Pairs: (0,3), (0,4), (3,4), (2,5) ✓

Input: nums = [1,1,1,1]
Output: 6
4 identical elements → C(4,2) = 6 ✓

Input: nums = [1,2,3]
Output: 0
No duplicate values ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int count = 0 ; 
        for(int i = 0 ; i < nums.size() ; i++){
            for(int j = i + 1 ; j < nums.size() ; j++){
                if(nums[i] == nums[j]){
                    count ++ ;
                }
            }
        }
        return count ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 9.6MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 5 |
| Accepted | 5 |
| Best Runtime | 0ms (C++) |
| Best Memory | 9.6MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/number-of-good-pairs/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
