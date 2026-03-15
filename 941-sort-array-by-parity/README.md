# 941 - Sort Array By Parity

**Difficulty:** Easy  
**Problem:** [sort-array-by-parity](https://leetcode.com/problems/sort-array-by-parity/)

## Description

Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

## Examples

**Example 1:**
```
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
```

**Example 2:**
```
Input: nums = [0]
Output: [0]
```

## Constraints
- `1 <= nums.length <= 5000`
- `0 <= nums[i] <= 5000`

## Approach

Separate even and odd numbers.

### Algorithm
1. Put even numbers in one array, odd numbers in another
2. Concatenate odd array to even array

## Complexity
- **Time:** O(n)
- **Space:** O(n)

## Best Solution

**Runtime:** 0ms | **Memory:** 21.1MB (C++)

```cpp
class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& nums) {
        vector<int> arr1 ;
        vector<int> arr2 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] % 2 == 0){
                arr1.push_back(nums[i]) ;
            }
            else{
                arr2.push_back(nums[i]) ;
            }
        }
        for(int i = 0 ; i < arr2.size() ; i++){
            arr1.push_back(arr2[i]) ;
        }
        return arr1 ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 0ms (C++)
- **Best Memory:** 21.1MB (C++)
- **Total Submissions:** 2
- **Accepted Submissions:** 2
