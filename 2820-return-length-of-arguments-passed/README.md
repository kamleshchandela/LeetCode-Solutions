# 2820 - Return Length of Arguments Passed

**Difficulty:** Easy  
**Problem:** [return-length-of-arguments-passed](https://leetcode.com/problems/return-length-of-arguments-passed/)

## Description

Write a function `argumentsLength` that returns the count of arguments passed to it.

## Examples

**Example 1:**
```
Input: args = [5]
Output: 1
```

**Example 2:**
```
Input: args = [{}, null, "3"]
Output: 3
```

## Constraints
- `args` is a valid JSON array
- `0 <= args.length <= 100`

## Approach

Return the length of arguments array.

### Algorithm
1. Return the length of the arguments array

## Complexity
- **Time:** O(1)
- **Space:** O(1)

## Best Solution

**Runtime:** 41ms | **Memory:** 53.8MB (JavaScript)

```javascript
var argumentsLength = function(...args) {
    return args.length ;
};
```

## Submission Statistics
- **Best Runtime:** 41ms (JavaScript)
- **Best Memory:** 53.8MB (JavaScript)
- **Total Submissions:** 1
- **Accepted Submissions:** 1
