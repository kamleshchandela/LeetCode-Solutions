# 2181 - Smallest Index With Equal Value

**Difficulty:** Easy  
**Problem:** [smallest-index-with-equal-value](https://leetcode.com/problems/smallest-index-with-equal-value/)

## Description

Given a 0-indexed integer array `nums`, return the smallest index `i` of `nums` such that `i mod 10 == nums[i]`, or `-1` if such index does not exist.

## Examples

**Example 1:**
```
Input: nums = [0,1,2]
Output: 0
```

**Example 2:**
```
Input: nums = [4,3,2,1]
Output: 2
```

**Example 3:**
```
Input: nums = [1,2,3,4,5,6,7,8,9,0]
Output: -1
```

## Constraints
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 9`

## Approach

Linear scan to find first matching index.

### Algorithm
1. Iterate through array
2. Check if `i % 10 == nums[i]`
3. Return first match or -1

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Best Solution

**Runtime:** 0ms | **Memory:** 25.8MB (C++)

```cpp
class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i++){
            if(i % 10 == nums[i]){
                return i ;
            }
        }
        return -1 ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 0ms (C++)
- **Best Memory:** 25.8MB (C++)
- **Total Submissions:** 3
- **Accepted Submissions:** 2
