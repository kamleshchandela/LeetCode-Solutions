# 238 - Product of Array Except Self

**Difficulty:** Medium  
**Problem:** [LeetCode 238](https://leetcode.com/problems/product-of-array-except-self/)

## Problem Description

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

You must write an algorithm that runs in O(n) time and without using the division operation.

## Examples

**Example 1:**
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Example 2:**
```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

## Constraints
- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`

## Approach

1. Calculate product of all non-zero elements
2. Handle case with 2+ zeros (all outputs become 0)
3. Handle case with 1 zero (only the zero position gets product)
4. Handle case with no zeros (divide each element's product by itself)

## Solution (C++ - Best)

```cpp
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> arr(nums.size());
        int mul = 1;
        int count = 0;
        int index = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] != 0){
                mul = mul * nums[i];
            }
            else{
                index = i;
                count++;
            }
            if(count > 1){
                for(int i = 0; i < nums.size(); i++){
                    nums[i] = 0;
                }
                return nums;
            }
        }
        if(count == 1){
            for(int i = 0; i < nums.size(); i++){
                if(i == index){
                    arr[i] = mul;
                }
                else{
                    arr[i] = 0;
                }
            }
            return arr;
        }
        for(int i = 0; i < nums.size(); i++){
            arr[i] = mul / (nums[i] != 0 ? nums[i] : 1);
        }
        return arr;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1) extra (excluding output array)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 40.1 MB | C++ |
| 10 ms | 67.2 MB | JavaScript |
