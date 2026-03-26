# 1584 - Average Salary Excluding the Minimum and Maximum Salary

**Difficulty:** Easy  
**Problem:** [LeetCode 1584](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

## Problem Description

You are given an array of unique integers `salary` where `salary[i]` is the salary of the `i`th employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within `10^-5` of the actual answer will be accepted.

## Examples

**Example 1:**
```
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
```

**Example 2:**
```
Input: salary = [1000,2000,3000]
Output: 2000.00000
```

## Constraints
- `3 <= salary.length <= 100`
- `1000 <= salary[i] <= 10^6`
- All the integers of `salary` are unique.

## Approach

1. Find the minimum and maximum salary values
2. Sum all salaries excluding min and max
3. Calculate average by dividing by (n - 2)

## Solution (C++)

```cpp
class Solution {
public:
    double average(vector<int>& salary) {
        int max = 0;
        int min = 2147483647;
        for(int i = 0; i < salary.size(); i++){
            if(max < salary[i]){
                max = salary[i];
            }
            if(min > salary[i]){
                min = salary[i];
            }
        }
        double sum = 0;
        for(int i = 0; i < salary.size(); i++){
            if(salary[i] != max && salary[i] != min){
                sum = sum + salary[i];
            }
        }
        return (double)(sum / (salary.size() - 2));
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 9.8 MB | C++ |
