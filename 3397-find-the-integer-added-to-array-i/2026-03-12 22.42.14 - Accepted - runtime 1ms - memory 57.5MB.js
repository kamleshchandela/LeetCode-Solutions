/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    for(let i = 0 ; i < nums1.length ; i++){
        let max = -Infinity ;
        let index = 0 ;
        for(let j = 0 ; j < nums1.length - i ; j ++){
            if(nums1[j] > max){
                max = nums1[j] ;
                index = j ;
            }
        }
        let temp = nums1[index] ;
        nums1[index] = nums1[nums1.length - 1 - i] ;
        nums1[nums1.length - 1 - i] = temp ;
    }
    for(let i = 0 ; i < nums2.length ; i++){
        let max = -Infinity ;
        let index = 0 ;
        for(let j = 0 ; j < nums2.length - i ; j ++){
            if(nums2[j] > max){
                max = nums2[j] ;
                index = j ;
            }
        }
        let temp = nums2[index] ;
        nums2[index] = nums2[nums2.length - 1 - i] ;
        nums2[nums2.length - 1 - i] = temp ;
    }
    return nums2[0] - nums1[0] ;
};