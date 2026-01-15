# 49 - Group Anagrams

**Difficulty:** Medium  
**Link:** [group-anagrams](https://leetcode.com/problems/group-anagrams/)

## Description

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

## Examples

**Example 1:**
```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**
```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**
```
Input: strs = ["a"]
Output: [["a"]]
```

## Constraints
- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Approach

Use a hash map where the key is the sorted string. Anagrams will have the same sorted representation. For each string, sort it and use as key to group anagrams together.

## Solution (C++)

```cpp
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        map<string , vector<string>> map ;
        for(int i = 0 ; i < strs.size() ; i++){
            string s = strs[i] ;
            sort(s.begin() , s.end()) ;
            map[s].push_back(strs[i]) ;
        }

        vector<vector<string>> ans ;
        for(auto i : map){
            ans.push_back(i.second) ;
        }
        return ans ;
    }
};
```

## Complexity Analysis

| Metric | Complexity |
|--------|------------|
| **Time** | O(n * k log k) where n is number of strings and k is max string length |
| **Space** | O(n * k) for storing the map and results |

## Submission Stats

| Language | Runtime | Memory |
|----------|---------|--------|
| C++ | 21ms | 26.2MB |
