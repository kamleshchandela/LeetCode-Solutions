# 1528 - Kids With the Greatest Number of Candies

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

---

## Description

There are `n` kids with candies. You are given an integer array `candies` of size `n`, where `candies[i]` represents the number of candies the ith kid has. There are also an integer `extraCandies`, denoting the number of extra candies that you can give to any kid.

Once you give `extraCandies` candies to some kid, they will have the greatest number of candies among all kids, or more candies than anyone else.

Return a boolean array `result` of size `n`, where `result[i]` is `true` if after giving all the `extraCandies` to the ith kid, they will have the greatest number of candies among all kids, and `false` otherwise.

---

## Examples

**Example 1:**
```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation: After giving 3 extra candies, kids 0, 1, and 3 will have the most candies.
```

**Example 2:**
```
Input: candies = [4,6,1,1,3], extraCandies = 5
Output: [true,false,false,false,false]
```

---

## Constraints

- `n == candies.length`
- `1 <= n <= 100`
- `1 <= candies[i] <= 100`
- `1 <= extraCandies <= 1000`

---

## Intuition & Approach

Find the maximum candy count and check if each kid can reach or exceed it with extra candies.

### Algorithm
1. Find the maximum candies any kid currently has
2. For each kid, check if candies[i] + extraCandies >= maxCandies
3. Mark result[i] accordingly
4. Return the result array

---

## Key Insights

- Need to find maximum first, then compare each kid against it
- Adding extraCandies to any kid keeps maximum unchanged
- O(n) solution finds max in one pass, compares in another

---

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time** | O(n) |
| **Space** | O(n) |

---

## Test Cases

| Input | Output |
|-------|--------|
| `[2,3,5,1,3], 3` | `[true,true,true,false,true]` |
| `[4,6,1,1,3], 5` | `[true,false,false,false,false]` |
| `[4,2,1,1,2], 1` | `[true,false,false,false,false]` |

---

## Best Solution

```javascript
var kidsWithCandies = function(candies, extraCandies) {
    var arr = [] ;
    let max = candies[0] ;
    for(let i = 0 ; i < candies.length ; i++){
        if(max < candies[i]){
            max = candies[i] ;
        }
    }
    for(let i = 0 ; i < candies.length ; i++){
        if(candies[i] + extraCandies >= max){
            arr[i] = true ;
        }
        else{
            arr[i] = false ;
        }
    }
    return arr ;
};
```

**Runtime:** 0ms  
**Memory:** 55.1MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-22 23:32:47 | **Accepted** | **0ms** | **55.1MB** |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)