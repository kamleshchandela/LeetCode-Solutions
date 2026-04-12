# 2813 - To Be Or Not To Be

**Difficulty:** Easy  
**Problem:** [LeetCode 2813](https://leetcode.com/problems/to-be-or-not-to-be/)

## Problem Description

Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions:
- `toBe(val)` accepts another value and returns `true` if the two values `===` each other, otherwise throws "Not Equal"
- `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other, otherwise throws "Equal"

## Examples

**Example 1:**
```
Input: func = () => expect(5).toBe(5)
Output: true
```

**Example 2:**
```
Input: func = () => expect(5).toBe(null)
Output: throws "Not Equal"
```

**Example 3:**
```
Input: func = () => expect(5).notToBe(null)
Output: true
```

## Approach

Return an object with two methods that check equality/inequality and throw appropriate errors.

## Solution (JavaScript)

```javascript
var expect = function(val) {
    return {
        toBe: function (e) {
            if(val === e){
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function (e) {
            if(val !== e){
                return true;
            }
            throw new Error("Equal");
        }
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 57 ms | 54.1 MB | JavaScript |
