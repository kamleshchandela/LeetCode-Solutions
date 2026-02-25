# 1651 - Shuffle String

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/shuffle-string/)

---

## Description

You are given a string `s` and an integer array `indices` of the same length. The string `s` will be shuffled such that the character at the i-th position moves to `indices[i]` in the shuffled string.

Return the shuffled string.

---

## Examples

**Example 1:**
```
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
```

**Example 2:**
```
Input: s = "abc", indices = [0,1,2]
Output: "abc"
```

---

## Constraints

- `s.length == indices.length == n`
- `1 <= n <= 100`
- `s` consists of only lowercase English letters.
- `0 <= indices[i] < n`
- All values of `indices` are unique.

---

## Intuition & Approach

Reconstruct the string by placing characters at their shuffled positions.

### Algorithm
1. Iterate through each index position (0 to n-1)
2. Find which original character maps to this position (where indices[j] == i)
3. Append that character to result string

---

## Key Insights

- Need to find inverse mapping: which character goes to each position
- Can iterate through positions and find matching indices

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n²) |
| **Space** | O(n) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `"codeleet", [4,5,6,7,0,2,1,3]` | `"leetcode"` |
| `"abc", [0,1,2]` | `"abc"` |

---

## Best Solution

```cpp
class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        string str = "" ;
        for(int i = 0 ; i < indices.size() ; i++){
            for(int j = 0 ; j < indices.size() ; j++){
                if(indices[j] == i){
                    str = str + s[j] ;
                }
            }
        }
        return str ;
    }
};
```

**Runtime:** 1ms  
**Memory:** 20.2MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-25 08:18:54 | **Accepted** | **1ms** | **20.2MB** (C++) |
| 2 | 2026-02-25 08:20:08 | Accepted | 0ms | 56.8MB (JS) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)