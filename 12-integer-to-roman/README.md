# 12 - Integer to Roman

**Difficulty:** Medium  
**Problem:** [integer-to-roman](https://leetcode.com/problems/integer-to-roman/)

## Description

Roman numerals are represented by seven different symbols:
- I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

Roman numerals are formed by appending conversions of decimal place values from highest to lowest.

Given an integer, convert it to a Roman numeral.

## Examples

**Example 1:**
```
Input: num = 3749
Output: "MMMDCCXLIX"
```

**Example 2:**
```
Input: num = 58
Output: "LVIII"
```

**Example 3:**
```
Input: num = 1994
Output: "MCMXCIV"
```

## Constraints
- `1 <= num <= 3999`

## Approach

Greedy conversion using value-symbol pairs.

### Algorithm
1. Define arrays of values and their corresponding symbols
2. Iterate through values, subtracting and appending symbols

## Complexity
- **Time:** O(1)
- **Space:** O(1)

## Best Solution

**Runtime:** 3ms | **Memory:** 12MB (C++)

```cpp
class Solution {
public:
    string intToRoman(int num) {
        vector<int> arr1 = {
            1000 , 900 , 500 , 400 , 100 , 90 , 50 , 40 , 10 , 9 , 5 , 4 , 1
        } ;
        vector<string> arr2 = {
            "M" , "CM" , "D" , "CD" , "C" , "XC" , "L" , "XL" , "X" , "IX" , "V" , "IV" , "I"  
        } ;
        string s = "" ; 
        for(int i = 0 ; i < arr1.size() ; i++){
            while(num >= arr1[i]){
                num = num - arr1[i] ;
                s = s + arr2[i] ;
            }
        }
        return s ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 3ms (C++)
- **Best Memory:** 12MB (C++)
- **Total Submissions:** 3
- **Accepted Submissions:** 3
