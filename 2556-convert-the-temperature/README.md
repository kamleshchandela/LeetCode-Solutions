# 2556 - Convert the Temperature

**Difficulty:** Easy  
**Problem:** [convert-the-temperature](https://leetcode.com/problems/convert-the-temperature/)

## Description

You are given a non-negative floating point number rounded to two decimal places `celsius`, that denotes the temperature in Celsius.

You should convert Celsius into Kelvin and Fahrenheit and return it as an array `ans = [kelvin, fahrenheit]`.

Note that:
- Kelvin = Celsius + 273.15
- Fahrenheit = Celsius * 1.80 + 32.00

## Examples

**Example 1:**
```
Input: celsius = 36.50
Output: [309.65000,97.70000]
```

**Example 2:**
```
Input: celsius = 122.11
Output: [395.26000,251.79800]
```

## Constraints
- `0 <= celsius <= 1000`

## Approach

Direct conversion using formulas.

### Algorithm
1. Calculate Kelvin = celsius + 273.15
2. Calculate Fahrenheit = celsius * 1.80 + 32.00
3. Return as array

## Complexity
- **Time:** O(1)
- **Space:** O(1)

## Best Solution

**Runtime:** 0ms | **Memory:** 8.4MB (C++)

```cpp
class Solution {
public:
    vector<double> convertTemperature(double celsius) {
        return {celsius + 273.15, celsius * 1.80 + 32.00};
    }
};
```

## Submission Statistics
- **Best Runtime:** 0ms (C++)
- **Best Memory:** 8.4MB (C++)
- **Total Submissions:** 3
- **Accepted Submissions:** 3
