# 3567 - Convert Date to Binary

**Difficulty:** Easy  
**Problem:** [LeetCode 3567](https://leetcode.com/problems/convert-date-to-binary/)

## Problem Description

You are given a string `date` representing a Gregorian calendar date in `yyyy-mm-dd` format. Return the binary representation by converting year, month, and day to binary separately.

## Examples

**Example 1:**
```
Input: date = "2080-02-29"
Output: "100000100000-10-11101"
```

**Example 2:**
```
Input: date = "1900-01-01"
Output: "11101101100-1-1"
```

## Constraints
- `date.length == 10`
- `date[4] == date[7] == '-'`

## Approach

1. Parse the date string by splitting on '-'
2. Convert each component to binary using toString(2)
3. Join with '-' separator

## Solution (JavaScript)

```javascript
var convertDateToBinary = function(date) {
    var str1 = "";
    var str2 = "";
    for(let i = 0; i < date.length; i++){
        if(date[i] == "-"){
            str2 = str2 + Number(str1).toString(2) + "-";
            str1 = "";
        }
        else{
            str1 = str1 + date[i];
        }
    }
    str2 = str2 + Number(str1).toString(2);
    return str2;
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 55.2 MB | JavaScript |
