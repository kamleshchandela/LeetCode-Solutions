/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
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
            console.log(arr[i])
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
    
    // console.log(arr)
    // return arr[] ;

    if(arr.length % 2 == 1){
        return arr[parseInt(arr.length/2)] ;
    }
    else{
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    }

};