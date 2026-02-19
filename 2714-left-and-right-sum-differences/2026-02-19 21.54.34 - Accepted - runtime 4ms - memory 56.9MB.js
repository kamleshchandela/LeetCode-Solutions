/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    var arr1 = [] ;
    var arr2 = [] ;
    var sum1 = 0 ;
    var sum2 = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        arr1[i] = sum1 ;
        sum1 = sum1 + nums[i] ;
    }
    for(let i = nums.length - 1 ; i >= 0 ; i--){
        arr2[i] = sum2 ;
        sum2 = sum2 + nums[i] ;
    }
    var arr = [] ;
    for(let i = 0 ; i < arr1.length ; i++){
        var a = arr1[i] - arr2[i] ;
        if(a < 0){
            a = a * (-1) ;
        }
        arr[i] = a ;
    }

    return arr ;
};