# 🚀 LeetCode #2714 - Left and Right Sum Differences

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Left%20Right%20Sums-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an array `nums`:
- `leftSum[i]`: Sum of elements to the left of index `i` (0 if none)
- `rightSum[i]`: Sum of elements to the right of index `i` (0 if none)

Return array where `answer[i] = |leftSum[i] - rightSum[i]|`

---

## 💡 Intuition & Approach

### Prefix and Suffix Sums
Precompute left and right sums:
- **Left sum**: Running total before current index
- **Right sum**: Running total after current index

### Core Logic
```
arr1[i] = sum of elements before i
arr2[i] = sum of elements after i
answer[i] = |arr1[i] - arr2[i]|
```

---

## 🎯 Key Insights

- Can compute in two passes
- Left sum: iterate left to right
- Right sum: iterate right to left

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(n) |

---

## ✅ Test Cases

```
Input: nums = [10,4,8,3]
Output: [15,1,11,22]
leftSum: [0,10,14,22]
rightSum: [15,11,3,0]
Differences: |0-15|,|10-11|,|14-3|,|22-0| = 15,1,11,22 ✓

Input: nums = [1]
Output: [0]
leftSum: [0], rightSum: [0], diff: 0 ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    vector<int> leftRightDifference(vector<int>& nums) {
        vector<int> arr1(nums.size()) ;
        vector<int> arr2(nums.size()) ;
        int sum1 = 0 ;
        int sum2 = 0 ;
        for(int i = 0 ; i < nums.size() ; i++){
            arr1[i] = sum1 ;
            sum1 = sum1 + nums[i] ;
        }
        for(int i = nums.size() - 1 ; i >= 0 ; i--){
            arr2[i] = sum2 ;
            sum2 = sum2 + nums[i] ;
        }
        vector<int> arr(nums.size()) ;
        for(int i = 0 ; i < arr1.size() ; i++){
            int a = arr1[i] - arr2[i] ;
            if(a < 0){
                a = a * (-1) ;
            }
            arr[i] = a ;
        }
        return arr ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 15.1MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 2 |
| Accepted | 2 |
| Best Runtime | 0ms (C++) |
| Best Memory | 15.1MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/left-and-right-sum-differences/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
