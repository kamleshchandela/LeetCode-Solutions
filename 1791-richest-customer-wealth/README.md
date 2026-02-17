# 1791 - Richest Customer Wealth

**Difficulty:** Easy  
**Problem:** [LeetCode 1791](https://leetcode.com/problems/richest-customer-wealth/)

## Problem Description

You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the `i`th customer has in the `j`th bank. Return the wealth that the richest customer has.

A customer's **wealth** is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum **wealth**.

## Examples

**Example 1:**
```
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
```

**Example 2:**
```
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
```

**Example 3:**
```
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
```

## Constraints
- `m == accounts.length`
- `n == accounts[i].length`
- `1 <= m, n <= 50`
- `1 <= accounts[i][j] <= 100`

## Approach

1. Iterate through each customer (row)
2. Calculate the sum of all accounts for each customer
3. Track the maximum sum found

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int max = -2147483648;
        for(int i = 0; i < accounts.size(); i++){
            int sum = 0;
            for(int j = 0; j < accounts[i].size(); j++){
                sum = sum + accounts[i][j];
            }
            if(max < sum){
                max = sum;
            }
        }
        return max;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(m * n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 11.3 MB | C++ |
| 0 ms | 54.6 MB | JavaScript |
