# 1221 - Element Appearing More Than 25% In Sorted Array

**Difficulty:** Easy  
**Problem:** [element-appearing-more-than-25-in-sorted-array](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/)

## Description

Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time. Return that integer.

## Examples

**Example 1:**
```
Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
```

**Example 2:**
```
Input: arr = [1,1]
Output: 1
```

## Constraints
- `1 <= arr.length <= 10^4`
- `0 <= arr[i] <= 10^5`

## Approach

Count consecutive occurrences.

### Algorithm
1. Iterate through array and count consecutive occurrences
2. If count > 25% of array length, return that element

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Best Solution

**Runtime:** 0ms | **Memory:** 16.5MB (C++)

```cpp
class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int count = 1 ;
        for(int i = 0 ; i < arr.size() - 1 ; i++){
            if(arr[i] == arr[i+1]){
                count ++ ;
            }
            else{
                if(count > arr.size()/4){
                    return arr[i] ;
                }
                count = 1 ;
            }
        }
        return arr[arr.size()-1] ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 0ms (C++)
- **Best Memory:** 16.2MB (C++)
- **Total Submissions:** 4
- **Accepted Submissions:** 4
