# 1205 - Defanging an IP Address

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/defanging-an-ip-address/)

---

## Description

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

---

## Examples

**Example 1:**
```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```

**Example 2:**
```
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

---

## Constraints

- The given `address` is a valid IPv4 address.

---

## Intuition & Approach

We need to replace every period '.' with '[.]' in the string.

### Algorithm
1. Iterate through each character in the address string
2. If the character is '.', append "[.]" to the result
3. Otherwise, append the character as-is
4. Return the resulting string

---

## Key Insights

- This is a simple string manipulation problem
- Using string concatenation in a loop builds the result
- No regex needed - a linear pass is sufficient

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
| `"1.1.1.1"` | `"1[.]1[.]1[.]1"` |
| `"255.100.50.0"` | `"255[.]100[.]50[.]0"` |
| `"0.0.0.0"` | `"0[.]0[.]0[.]0"` |

---

## Best Solution

```cpp
class Solution {
public:
    string defangIPaddr(string address) {
        string s = "" ;
        for(int i = 0 ; i < address.size() ; i++){
            if(address[i] == '.'){
                s = s + "[.]" ;
            }
            else{
                s = s + address[i] ;
            }
        }
        return s ;
    }
};
```

**Runtime:** 3ms  
**Memory:** 7.8MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-20 23:19:13 | **Accepted** | **43ms** | **54.5MB** (JS) |
| 2 | 2026-02-20 23:20:32 | Accepted | 3ms | 7.8MB (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)