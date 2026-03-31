# 3227 - Find Missing and Repeated Values

**Difficulty:** Easy  
**Problem:** [LeetCode 3227](https://leetcode.com/problems/find-missing-and-repeated-values/)

## Problem Description

You are given a 0-indexed 2D integer matrix `grid` of size n * n with values in the range `[1, n^2]`. Each integer appears exactly once except `a` which appears twice and `b` which is missing.

Return `[a, b]` where `a` is the repeated value and `b` is the missing value.

## Examples

**Example 1:**
```
Input: grid = [[1,3],[2,2]]
Output: [2,4]
```

**Example 2:**
```
Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
Output: [9,5]
```

## Constraints
- `2 <= n == grid.length == grid[i].length <= 50`
- `1 <= grid[i][j] <= n * n`

## Approach

1. Use a map to count occurrences of each number
2. Find the number with count 2 (repeated)
3. Find the number with count 0 (missing)

## Solution (C++ - Best)

```cpp
class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        int a, b = 0;
        map<int, int> map;
        for(int i = 0; i < grid.size(); i++){
            for(int j = 0; j < grid[i].size(); j++){
                map[grid[i][j]]++;
            }
        }
        for(int i = 1; i <= grid.size() * grid.size(); i++){
            if(map[i] == 0){
                b = i;
            }
            if(map[i] == 2){
                a = i;
            }
        }
        return {a, b};
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(n^2)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 18 ms | 31.9 MB | C++ |
| 26 ms | 32.1 MB | C++ |
