/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arr = [] ;
    var k = 0 ;
    for(let i = 0 ; i < nums1.length ; i++){
        for(let j = 0 ; j < nums2.length ; j++){
            if(nums1[i] == nums2[j] && (!obj[j])){
                obj[j] = j ;
                arr[k] = nums1[i] ;
                k++;
                break ;
            }
        }
    }
    // console.log(arr)
    return arr ;
};