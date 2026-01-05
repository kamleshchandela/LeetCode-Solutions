/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var arr = [] ;
    var k = 0 ;
    var obj = {} ;
    for(let i = 0 ; i < nums1.length ; i++){
        for(let j = 0 ; j < nums2.length ; j++){
            if(nums1[i] == nums2[j] && !obj[nums1[i]]){
                obj[nums1[i]] = 1 ;
                arr[k] = nums1[i] ;
                k++;
                break ;
            }
        }
    }
    // console.log(obj)
    // console.log(arr)
    return arr ;
};