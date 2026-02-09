/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    var arr = [] ;
    for(let i = 0 ; i < nums.length ; i++ ){
        arr[i] = nums[i] ;
    }
    for(let i = 0 ; i < nums.length ; i++ ){
        arr[nums.length + i] = nums[i] ;
    }
    return arr ;
};