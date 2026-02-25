# 2748 - Calculate Delayed Arrival Time

**Difficulty:** Easy  
**Problem:** [calculate-delayed-arrival-time](https://leetcode.com/problems/calculate-delayed-arrival-time/)

## Description

You are given a positive integer `arrivalTime` denoting the arrival time of a train in hours, and another positive integer `delayedTime` denoting the amount of delay in hours.

Return the time when the train will arrive at the station.

Note that the time in this problem is in 24-hours format.

## Examples

**Example 1:**
```
Input: arrivalTime = 15, delayedTime = 5 
Output: 20 
```

**Example 2:**
```
Input: arrivalTime = 13, delayedTime = 11
Output: 0
```

## Constraints
- `1 <= arrivalTime < 24`
- `1 <= delayedTime <= 24`

## Approach

Simple addition with modulo 24.

### Algorithm
1. Add arrivalTime and delayedTime
2. Return modulo 24

## Complexity
- **Time:** O(1)
- **Space:** O(1)

## Best Solution

**Runtime:** 0ms | **Memory:** 8.2MB (C++)

```cpp
class Solution {
public:
    int findDelayedArrivalTime(int arrivalTime, int delayedTime) {
        return (arrivalTime + delayedTime) % 24 ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 0ms (C++)
- **Best Memory:** 8.2MB (C++)
- **Total Submissions:** 3
- **Accepted Submissions:** 3
