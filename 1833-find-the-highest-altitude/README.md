# 1833 - Find the Highest Altitude

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/find-the-highest-altitude/)

---

## Description

There is a biker going on a road trip. The road trip consists of `n + 1` points at different altitudes. The biker starts his trip on point `0` with altitude equal `0`.

You are given an integer array `gain` of length `n` where `gain[i]` is the net gain in altitude between points `i` and `i + 1`. Return the highest altitude of a point.

---

## Examples

**Example 1:**
```
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
```

**Example 2:**
```
Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-4,-2]. The highest is 0.
```

---

## Constraints

- `n == gain.length`
- `1 <= n <= 100`
- `-100 <= gain[i] <= 100`

---

## Intuition & Approach

Calculate running cumulative altitudes and track the maximum.

### Algorithm
1. Initialize current altitude = 0 and max altitude = 0
2. For each gain value, add it to current altitude
3. Update max if current altitude exceeds it
4. Return max

---

## Key Insights

- Starting altitude is always 0
- Track running sum (prefix sum) while iterating
- Only need to track current cumulative and maximum

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n) |
| **Space** | O(1) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[-5,1,5,0,-7]` | `1` |
| `[-4,-3,-2,-1,4,3,2]` | `0` |
| `[5,10,-5]` | `10` |

---

## Best Solution

```cpp
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int sum = 0 ;
        int max = 0 ;
        for(int i = 0 ; i < gain.size() ; i++){
            sum = sum + gain[i] ;
            if(max < sum){
                max = sum ;
            }
        }
        return max ;
    }
};
```

**Runtime:** 0ms  
**Memory:** 10.7MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-23 12:26:46 | **Accepted** | **0ms** | **55MB** (JS) |
| 2 | 2026-02-23 12:29:05 | Accepted | 0ms | 10.7MB (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)