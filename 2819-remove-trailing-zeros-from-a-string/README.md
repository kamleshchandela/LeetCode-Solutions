# 2819 - Remove Trailing Zeros From a String

**Difficulty:** Easy  
**Problem:** [LeetCode 2819](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/)

## Problem Description

Given a positive integer `num` represented as a string, return the integer `num` without trailing zeros as a string.

## Examples

**Example 1:**
```
Input: num = "51230100"
Output: "512301"
```

**Example 2:**
```
Input: num = "123"
Output: "123"
```

## Constraints
- `1 <= num.length <= 1000`
- `num` consists of only digits.
- `num` doesn't have any leading zeros.

## Approach

1. Count trailing zeros from the end
2. Return substring without trailing zeros

## Solution (JavaScript - Best)

```javascript
var removeTrailingZeros = function(num) {
    let count = 0;
    for(let i = num.length - 1; i >= 0; i--){
        if(num[i] == "0" && num[i-1] == "0"){
            count++;
        }
        else{
            break;
        }
    }
    let str = "";
    if(count > 0){
        count++;
    }
    else if(num[num.length - 1] == "0" && num[num.length - 2] != 0){
        for(let i = 0; i < num.length - 1; i++){
            str = str + num[i];
        }
        return str;
    }
    for(let i = 0; i < num.length - count; i++){
        str = str + num[i];
    }
    return str;
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 5 ms | 60.2 MB | JavaScript |
| 7 ms | 58.8 MB | JavaScript |
| 7 ms | 59.9 MB | JavaScript |
| 33 ms | 54.4 MB | C++ |
