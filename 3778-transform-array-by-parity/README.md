# 🚀 LeetCode #3778 - Transform Array By Parity

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge-Problem-Transform%20Array%20By%20Parity-blue)
![Last Updated](https://img.shields.io/badge-Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Given an integer array `nums`, transform it by rearranging its elements so that all even numbers appear before all odd numbers while maintaining their relative order.

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    vector<int> transformArray(vector<int>& nums) {
        int count1 = 0 ;
        int count2 = 0 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] % 2 == 0){
                count1 ++ ;
            }
            else{
                count2 ++ ; 
            }
        }
        for(int i = 0 ; i < count1 + count2 ; i++){
            if(i < count1){
                nums[i] = 0 ;
            }
            else{
                nums[i] = 1 ;
            }
        }
        
        return nums ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 28.3MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/transform-array-by-parity/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>