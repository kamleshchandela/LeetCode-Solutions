# 🚀 LeetCode #53 - Maximum Subarray

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Problem](https://img.shields.io/badge/Problem-Maximum%20Subarray-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-March%202026-orange)

---

## 📝 Problem Statement

Given an integer array `nums`, find the **subarray** with the largest sum, and return its sum.

---

## 💡 Intuition & Approach

### Kadane's Algorithm
This is a classic dynamic programming problem. The key insight is:
- At each position, decide whether to extend the current subarray or start fresh
- If the current sum becomes negative, it's better to start a new subarray

### Core Logic
```
At each index i:
  - Either extend the previous subarray (sum + nums[i])
  - Or start a new subarray from nums[i]
  - Track the maximum seen so far
```

---

## 🎯 Key Insights

- **Negative sum is toxic**: If current sum goes negative, discard it
- **Single pass solution**: O(n) time complexity
- **In-place decision**: No extra space needed

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: Subarray [4,-1,2,1] has the largest sum 6 ✓

Input: nums = [1]
Output: 1
Explanation: Single element is the maximum ✓

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: Subarray [5,4,-1,7,8] has the largest sum 23 ✓
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int sum = nums[0] ; 
        int maxsum = nums[0] ;
        for(int i = 1 ; i < nums.size() ; i++){
            sum = sum + nums[i] ;
            if(sum < nums[i]){
                sum = nums[i] ;
            }
            if(sum >= maxsum){
                maxsum = sum ;
            }
        }
        return maxsum ; 
    }
};
```

**Stats:** ⚡ 0ms | 💾 71.6MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 6 |
| Accepted | 2 |
| Best Runtime | 0ms (C++) |
| Best Memory | 63.9MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/maximum-subarray/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
