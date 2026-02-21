# 2847 - Find Maximum Number of String Pairs

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/find-maximum-number-of-string-pairs/)

---

## Description

You are given a 0-indexed array `words` consisting of distinct strings.

The string `words[i]` can be paired with the string `words[j]` if:
- The string `words[i]` is equal to the reversed string of `words[j]`.
- `0 <= i < j < words.length`.

Return the maximum number of pairs that can be formed from the array `words`.

Note that each string can belong in at most one pair.

---

## Examples

**Example 1:**
```
Input: words = ["cd","ac","dc","ca","zz"]
Output: 2
Explanation: Pairs are ["cd","dc"] and ["ac","ca"].
```

**Example 2:**
```
Input: words = ["ab","ba","cc"]
Output: 1
Explanation: Pair is ["ab","ba"]. "cc" has no match.
```

**Example 3:**
```
Input: words = ["aa","ab"]
Output: 0
```

---

## Constraints

- `1 <= words.length <= 50`
- `words[i].length == 2`
- `words` consists of distinct strings.

---

## Intuition & Approach

Find pairs of strings where one is the reverse of the other.

### Algorithm
1. Iterate through all pairs (i, j) where i < j
2. Check if words[i][0] == words[j][1] and words[i][1] == words[j][0]
3. If true, increment count
4. Return total count

---

## Key Insights

- Since strings are length 2, we can compare characters directly
- Each string appears once, so greedy counting works
- O(n²) is acceptable for n <= 50

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
| `["cd","ac","dc","ca","zz"]` | `2` |
| `["ab","ba","cc"]` | `1` |
| `["aa","ab"]` | `0` |

---

## Best Solution

```cpp
class Solution {
public:
    int maximumNumberOfStringPairs(vector<string>& words) {
        int count = 0 ;
        for(int i = 0 ; i < words.size() ; i++){
            for(int j = i + 1 ; j < words.size() ; j++){
                if(words[i][0] == words[j][1] && words[i][1] == words[j][0]){
                    count ++ ;
                }
            }
        }
        return count ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 24.8MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-21 23:39:14 | Accepted | 4ms | 55MB |
| 2 | 2026-02-21 23:40:00 | **Accepted** | **0ms** | **24.8MB** (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)