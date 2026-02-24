/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i = 0 ; i < n ; i++ ){
        nums1[m + i] = nums2[i] ;
    }
    for(let i = 0; i < nums1.length ; i ++){
        var max = -Infinity ; 
        var index = 0 ; 
        for(let j = 0 ; j < nums1.length - i ; j++){
            if(max < nums1[j]){
                max = nums1[j] ;
                index = j ; 
            }
        }
        var temp = nums1[index] ;
        nums1[index] = nums1[nums1.length - 1 - i] ;
        nums1[nums1.length - 1 - i] = temp ;
    }
    return nums1 ;
};