# 2789 - Counter II

**Difficulty:** Easy  
**Problem:** [LeetCode 2789](https://leetcode.com/problems/counter-ii/)

## Problem Description

Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions:

- `increment()` increases the current value by 1 and then returns it.
- `decrement()` reduces the current value by 1 and then returns it.
- `reset()` sets the current value to `init` and then returns it.

## Examples

**Example 1:**
```
Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
```

**Example 2:**
```
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
```

## Constraints
- `-1000 <= init <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i]` is one of "increment", "decrement" and "reset"

## Approach

Return an object with three methods that manipulate a closure variable:
- `increment`: pre-increment and return
- `decrement`: pre-decrement and return
- `reset`: restore to initial value and return

## Solution (JavaScript)

```javascript
var createCounter = function(init) {
    let n = init;
    return {
        increment: function () {
            return ++n;
        },
        reset: function () {
            n = init;
            return n;
        },
        decrement: function () {
            return --n;
        }
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(1) per method call
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 50 ms | 56.7 MB | JavaScript |
