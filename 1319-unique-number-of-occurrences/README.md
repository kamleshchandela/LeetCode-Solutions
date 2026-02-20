# 1319 - Unique Number of Occurrences

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/unique-number-of-occurrences/)

---

## Description

Given an array of integers `arr`, return `true` if the number of occurrences of each value in the array is unique, or `false` otherwise.

---

## Examples

**Example 1:**
```
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: 1 has 3 occurrences, 2 has 2, 3 has 1. All occurrences are unique.
```

**Example 2:**
```
Input: arr = [1,2]
Output: false
```

**Example 3:**
```
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
```

---

## Constraints

- `1 <= arr.length <= 1000`
- `-1000 <= arr[i] <= 1000`

---

## Intuition & Approach

We need to check if all values in the array have unique occurrence counts.

### Algorithm
1. Count occurrences of each number using a hash map
2. Extract all occurrence counts into an array
3. Check if any count appears more than once by comparing pairs
4. Return true if all counts are unique, false otherwise

---

## Key Insights

- Using an object/hash map for counting provides O(1) lookup
- The nested loop for uniqueness check is O(n²) but n is bounded (max 1000 unique values)
- Could be optimized with a Set for O(n) overall, but this passes within constraints

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n²) worst case, O(n) typical |
| **Space** | O(n) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[1,2,2,1,1,3]` | `true` |
| `[1,2]` | `false` |
| `[-3,0,1,-3,1,1,1,-3,10,0]` | `true` |
| `[0,0,0,0]` | `true` |

---

## Best Solution

```javascript
var uniqueOccurrences = function(arr) {
    var obj = {} ;
    var arr1 = [] ;
    var count = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1 ;
        }
        else{
            obj[arr[i]] += 1 ; 
        }
    }

    for(let i in obj){
        arr1[count] = obj[i] ;
        count++ ;
    }

    for(let i = 0 ; i < count - 1 ; i ++){
        for(let j = 0 ; j < arr1.length ; j++){
            if(arr1[i] == arr1[j] && i != j){
                return false ;
            }
        }
    }
    return true ;
};
```

**Runtime:** 0ms  
**Memory:** 54.2MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-20 17:13:57 | **Accepted** | **0ms** | **54.2MB** |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)