# 1468 - Check If N and Its Double Exist

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/check-if-n-and-its-double-exist/)

---

## Description

Given an array of integers `arr`, check if there exist two indices `i` and `j` such that:
- `i != j`
- `0 <= i, j < arr.length`
- `arr[i] == 2 * arr[j]`

---

## Examples

**Example 1:**
```
Input: arr = [10,2,5,3]
Output: true
Explanation: arr[0] = 10 is twice arr[3] = 3 (10 == 2 * 3).
```

**Example 2:**
```
Input: arr = [3,1,7,11]
Output: false
```

**Example 3:**
```
Input: arr = [0,0]
Output: true
Explanation: arr[0] = 0 and arr[1] = 0, and 0 == 2 * 0.
```

---

## Constraints

- `2 <= arr.length <= 500`
- `-10^3 <= arr[i] <= 10^3`

---

## Intuition & Approach

We need to find if any element is exactly twice another element in the array.

### Algorithm
1. Iterate through all pairs (i, j) where i != j
2. Check if arr[i] == 2 * arr[j]
3. Return true if found, otherwise return false

---

## Key Insights

- Need to handle edge case where 0 exists in the array (since 0 == 2 * 0)
- Brute force O(n²) works given constraints (n <= 500)
- Could be optimized using a hash set to O(n)

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n²) |
| **Space** | O(1) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[10,2,5,3]` | `true` |
| `[3,1,7,11]` | `false` |
| `[0,0]` | `true` |
| `[7,2,14]` | `true` |

---

## Best Solution

```cpp
class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        for(int i = 0 ; i < arr.size() ; i++){
            for(int j = 0 ; j < arr.size() ; j++){
                if(arr[i] == arr[j] * 2 && i != j){
                    return true ;
                }
            }
        }
        return false ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 13.6MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-20 19:13:57 | Wrong Answer | NA | NA |
| 2 | 2026-02-20 19:15:58 | Accepted | 1ms | 55.3MB (JS) |
| 3 | 2026-02-20 19:16:56 | Accepted | 0ms | 13.6MB (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)