# 🚀 LeetCode #2048 - Build Array from Permutation

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Build%20Array-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given a **zero-based permutation** `nums` (distinct integers from `0` to `n-1`), build array `ans` where:
- `ans[i] = nums[nums[i]]`

Return `ans`.

---

## 💡 Intuition & Approach

### Direct Mapping
Apply nested indexing:
- For each index `i`
- Take `nums[i]` as index into `nums` again
- Assign to result

### Core Logic
```
for i in 0..n-1:
    ans[i] = nums[nums[i]]
```

---

## 🎯 Key Insights

- Permutation contains all indices 0..n-1
- nums[nums[i]] is always valid
- Single pass solution

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(n) |

---

## ✅ Test Cases

```
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
ans[0] = nums[nums[0]] = nums[0] = 0
ans[1] = nums[nums[1]] = nums[2] = 1
ans[2] = nums[nums[2]] = nums[1] = 2
... ✓

Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3] ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        vector<int> arr(nums.size()) ;
        for(int i = 0 ; i < nums.size() ; i++){
            arr[i] = nums[nums[i]];
        }
        return arr ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 20.5MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 3 |
| Accepted | 3 |
| Best Runtime | 0ms (C++) |
| Best Memory | 20.5MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/build-array-from-permutation/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
