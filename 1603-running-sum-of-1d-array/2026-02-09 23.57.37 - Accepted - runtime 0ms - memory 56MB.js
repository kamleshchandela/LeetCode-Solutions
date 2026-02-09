/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var arr = [] ;
    var sum = 0 ; 
    for (let i = 0 ; i < nums.length ; i++){
        sum = sum + nums[i] ;
        arr[i] = sum ;
    }
    return arr ;
};