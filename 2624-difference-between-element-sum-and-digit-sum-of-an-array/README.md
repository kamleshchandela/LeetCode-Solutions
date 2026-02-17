# 🚀 LeetCode #2624 - Difference Between Element Sum and Digit Sum

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Element%20vs%20Digit%20Sum-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given a positive integer array `nums`:
- **Element Sum**: Sum of all elements in `nums`
- **Digit Sum**: Sum of all digits that appear in `nums`

Return the **absolute difference** between element sum and digit sum.

---

## 💡 Intuition & Approach

### Two-Pass Calculation
1. **Pass 1**: Calculate element sum (simple addition)
2. **Pass 2**: Calculate digit sum (extract digits from each number)
3. Return absolute difference

### Digit Extraction
```
while n > 0:
    digitSum += n % 10
    n = n / 10
```

---

## 🎯 Key Insights

- Element sum considers the whole number
- Digit sum considers individual digits
- Use `Math.abs()` for the difference

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n × d) where d = avg digits per number |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: nums = [1,15,6,3]
Output: 9
Element Sum: 1 + 15 + 6 + 3 = 25
Digit Sum: 1 + 1 + 5 + 6 + 3 = 16
Difference: |25 - 16| = 9 ✓

Input: nums = [1,2,3,4]
Output: 0
Element Sum: 10, Digit Sum: 10 → Diff: 0 ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */

function sep (n) {
    if(n.length == 1){
        return n ;
    }
    var temp = 0 ;
    while(n>=1){
        temp = temp + n % 10 ;
        n = parseInt(n / 10) ;
    }
    return temp ;
}

var differenceOfSum = function(nums) {
    var sum1 = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        sum1 = sum1 + nums[i] ;
    }

    var sum2 = 0 ; 
    for(let i = 0 ; i < nums.length ; i++){
        var value = sep(nums[i]);
        sum2 = sum2 + value ;
    }

    var ans = sum1 - sum2 ;

    if(ans >= 0){
        return ans ;
    }
    else{
        return -ans ;
    }
};
```

**Stats:** ⚡ 14ms | 💾 59.6MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 14ms (JS) |
| Best Memory | 59.6MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
