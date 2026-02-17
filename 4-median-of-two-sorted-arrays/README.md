# 4 - Median of Two Sorted Arrays

**Difficulty:** Hard  
**Link:** [median-of-two-sorted-arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Description

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

## Examples

**Example 1:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
```

**Example 2:**
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
```

## Constraints
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

## Approach

Merge both sorted arrays into one sorted array using a two-pointer technique. Then find the median based on whether the merged array length is odd or even.

## Solution (JavaScript)

```javascript
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [] ;
    var i = 0 ;
    var j = 0 ; 
    var k = 0 ; 
    while (j < nums1.length && k < nums2.length){

        if(nums1[j] >= nums2[k] ){
            arr[i] = nums2[k] ;
            i++ ;
            k++ ;
        }
        else{
            arr[i] = nums1[j] ;
            i++ ;
            j++ ;
        }


    }
    
    
    if(j<nums1.length){
        while(j<nums1.length){
            arr[i] = nums1[j] ;
            j++ ;
            i++ ;
        }
    }
    if(k<nums2.length){
        while(k<nums2.length){
            arr[i] = nums2[k] ;
            k++ ;
            i++ ;
        }
    }

    if(arr.length % 2 == 1){
        return arr[parseInt(arr.length/2)] ;
    }
    else{
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    }

};
```

## Complexity Analysis

| Metric | Complexity |
|--------|------------|
| **Time** | O(m + n) for merging both arrays |
| **Space** | O(m + n) for the merged array |

## Submission Stats

| Language | Runtime | Memory |
|----------|---------|--------|
| JavaScript | 27ms | 61.6MB |
