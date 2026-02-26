# 2163 - Kth Distinct String in an Array

**Difficulty:** Easy  
**Problem:** [kth-distinct-string-in-an-array](https://leetcode.com/problems/kth-distinct-string-in-an-array/)

## Description

A **distinct string** is a string that is present only once in an array.

Given an array of strings `arr`, and an integer `k`, return the k-th distinct string present in `arr`. If there are fewer than `k` distinct strings, return an empty string.

Note that the strings are considered in the order in which they appear in the array.

## Examples

**Example 1:**
```
Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
```

**Example 2:**
```
Input: arr = ["aaa","aa","a"], k = 1
Output: "aaa"
```

**Example 3:**
```
Input: arr = ["a","b","a"], k = 3
Output: ""
```

## Constraints
- `1 <= k <= arr.length <= 1000`
- `1 <= arr[i].length <= 5`
- `arr[i]` consists of lowercase English letters.

## Approach

Count occurrences and find kth distinct.

### Algorithm
1. Count occurrences of each string
2. Iterate through array and count distinct strings
3. Return the kth distinct string

## Complexity
- **Time:** O(n)
- **Space:** O(n)

## Best Solution

**Runtime:** 4ms | **Memory:** 57.8MB (JavaScript)

```javascript
var kthDistinct = function(arr, k) {
    let obj = {} ;
    for(let i = 0 ; i < arr.length ; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1 ;
        }
        else{
            obj[arr[i]] += 1 ;
        }
    }
    let count = 0 ;
    for(let i in obj){
        if(obj[i] == 1){
            count ++ ;
            if(count == k){
                return i ;
            }
        }
    }
    return "" ;
};
```

## Submission Statistics
- **Best Runtime:** 4ms (JavaScript)
- **Best Memory:** 57.8MB (JavaScript)
- **Total Submissions:** 1
- **Accepted Submissions:** 1
