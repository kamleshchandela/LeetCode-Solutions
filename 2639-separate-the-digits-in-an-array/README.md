# 2639 - Separate the Digits in an Array

**Difficulty:** Easy  
**Problem:** [LeetCode 2639](https://leetcode.com/problems/separate-the-digits-in-an-array/)

## Problem Description

Given an array of positive integers `nums`, return an array `answer` that consists of the digits of each integer in `nums` after separating them in the same order they appear in `nums`.

## Examples

**Example 1:**
```
Input: nums = [13,25,83,77]
Output: [1,3,2,5,8,3,7,7]
```

**Example 2:**
```
Input: nums = [7,1,3,9]
Output: [7,1,3,9]
```

## Constraints
- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^5`

## Approach

1. Iterate through each number in the array
2. For multi-digit numbers, extract digits using modulo and divide
3. Store digits in reverse order, then reverse to maintain original order
4. For single-digit numbers, add directly to result

## Solution (C++ - Best)

```cpp
class Solution {
public:
    vector<int> separateDigits(vector<int>& nums) {
        vector<int> arr;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] > 9){
                vector<int> arr1;
                int n = nums[i];
                while(n >= 1){
                    int temp = n % 10;
                    n = int(n / 10);
                    arr1.push_back(temp);
                }
                for(int j = arr1.size() - 1; j >= 0; j--){
                    arr.push_back(arr1[j]);
                }
            }
            else{
                arr.push_back(nums[i]);
            }
        }
        return arr;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n * d) where d is max digits
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 4 ms | 60.4 MB | JavaScript |
| 11 ms | 16.2 MB | C++ |
