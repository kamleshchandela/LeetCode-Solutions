# 2876 - Number of Employees Who Met the Target

**Difficulty:** Easy  
**Problem:** [LeetCode 2876](https://leetcode.com/problems/number-of-employees-who-met-the-target/)

## Problem Description

There are `n` employees in a company. Each employee `i` has worked for `hours[i]` hours.

The company requires each employee to work for at least `target` hours.

Return the number of employees who worked at least `target` hours.

## Examples

**Example 1:**
```
Input: hours = [0,1,2,3,4], target = 2
Output: 3
```

**Example 2:**
```
Input: hours = [5,1,4,2,2], target = 6
Output: 0
```

## Constraints
- `1 <= n == hours.length <= 50`
- `0 <= hours[i], target <= 10^5`

## Approach

1. Count employees whose hours >= target

## Solution (JavaScript)

```javascript
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    var count = 0;
    for(let i = 0; i < hours.length; i++){
        if(hours[i] >= target){
            count++;
        }
    }
    return count;
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 1 ms | 55.6 MB | JavaScript |
