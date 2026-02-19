# 2734 - Array Prototype Last

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/array-prototype-last/)

---

## Description

Write code that enhances all arrays such that you can call the `array.last()` method on any array and it will return the last element. If there are no elements in the array, it should return `-1`.

---

## Examples

**Example 1:**
```
Input: nums = [null, {}, 3]
Output: 3
```

**Example 2:**
```
Input: nums = []
Output: -1
```

---

## Constraints

- `arr` is a valid JSON array
- `0 <= arr.length <= 1000`

---

## Intuition & Approach

The problem is straightforward - we need to extend the built-in `Array` prototype with a custom `last()` method that returns the last element of the array.

### Algorithm
1. Extend `Array.prototype` with a `last` method
2. Check if the array is empty (length === 0)
3. If empty, return -1
4. Otherwise, return the last element using index `this.length - 1`

---

## Key Insights

- Using `prototype` allows the method to be available on all array instances
- Accessing the last element via `this[this.length - 1]` is O(1)
- No extra space is needed since we're modifying the prototype

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(1) |
| **Space** | O(1) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[null, {}, 3]` | `3` |
| `[]` | `-1` |
| `[42]` | `42` |
| `["a", "b", "c"]` | `"c"` |

---

## Best Solution

```javascript
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length == 0){
        return -1 ;
    }
    
    return this[this.length - 1] ;
};
```

**Runtime:** 43ms  
**Memory:** 53.6MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-19 23:32:57 | Wrong Answer | NA | NA |
| 2 | 2026-02-19 23:34:16 | Wrong Answer | NA | NA |
| 3 | 2026-02-19 23:36:48 | Wrong Answer | NA | NA |
| 4 | 2026-02-19 23:37:03 | **Accepted** | **43ms** | **53.6MB** |
| 5 | 2026-02-19 23:37:21 | Accepted | 47ms | 53.4MB |

---

## Related Problems

- [2606 - Minimum Number Operations to Move All Balls to Each Box](https://leetcode.com/problems/minimum-number-operations-to-move-all-balls-to-each-box/)

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)