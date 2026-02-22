# 125 - Valid Palindrome

**Difficulty:** Easy  
**Problem:** [View on LeetCode](https://leetcode.com/problems/valid-palindrome/)

---

## Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

---

## Examples

**Example 1:**
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**
```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**
```
Input: s = " "
Output: true
Explanation: Empty string is a palindrome.
```

---

## Constraints

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

---

## Intuition & Approach

Clean the string and check if it reads the same forwards and backwards.

### Algorithm
1. Iterate through string, keeping only alphanumeric characters
2. Convert uppercase to lowercase using charCode
3. Build filtered string
4. Compare characters from start and end moving toward center
5. Return true if all match, false otherwise

---

## Key Insights

- Using charCode for uppercase to lowercase conversion: +32 offset
- Need to parseInt for half length to handle integer division
- Early return for single character (always palindrome)

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
| `"A man, a plan, a canal: Panama"` | `true` |
| `"race a car"` | `false` |
| `" "` | `true` |
| `"aa"` | `true` |

---

## Best Solution

```javascript
var isPalindrome = function(s) {
    var str = "" ;
    for(let i = 0 ; i < s.length ; i++ ){
        if(s[i] >= "A" && s[i] <= "Z" || s[i] >= "a" && s[i] <= "z" || s[i] >= "0" && s[i] <= "9"){
            if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
                let a = s.charCodeAt(i) + 32 ;
                str = str + String.fromCharCode(a) ;
            }
            else{
                str = str + s[i] ;
            }
        }
    }
    if(str.length == 1) return true ;
    for(let i = 0 ; i < parseInt(s.length / 2) ; i++){
        if(str[i] != str[str.length - 1 - i]){
            return false ;
        }
    }
    return true ;
};
```

**Runtime:** 2ms  
**Memory:** 58.2MB

---

## Submission History

| # | Date | Result | Runtime | Memory |
|---|------|--------|---------|--------|
| 1 | 2026-02-22 22:08:17 | Wrong Answer | NA | NA |
| 2 | 2026-02-22 22:09:11 | Wrong Answer | NA | NA |
| 3 | 2026-02-22 22:10:14 | Wrong Answer | NA | NA |
| 4 | 2026-02-22 22:11:33 | Runtime Error | NA | NA |
| 5 | 2026-02-22 22:12:05 | Wrong Answer | NA | NA |
| 6 | 2026-02-22 22:12:30 | Wrong Answer | NA | NA |
| 7 | 2026-02-22 22:14:10 | Runtime Error | NA | NA |
| 8 | 2026-02-22 22:15:45 | Wrong Answer | NA | NA |
| 9 | 2026-02-22 22:16:21 | Wrong Answer | NA | NA |
| 10 | 2026-02-22 22:16:47 | Wrong Answer | NA | NA |
| 11 | 2026-02-22 22:17:15 | Wrong Answer | NA | NA |
| 12 | 2026-02-22 22:19:53 | **Accepted** | **2ms** | **58.2MB** (JS) |
| 13 | 2026-02-22 22:24:21 | Runtime Error | NA | NA |
| 14 | 2026-02-22 22:31:33 | Memory Limit Exceeded | NA | NA (C++) |

---

Made with ❤️ | [LeetCode Solutions](https://github.com/anomalyco/LeetCode)