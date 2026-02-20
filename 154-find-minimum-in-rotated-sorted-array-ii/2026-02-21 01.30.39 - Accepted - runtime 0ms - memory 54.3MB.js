/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var min = Infinity ;
    for(let i = 0 ; i < nums.length ; i++){
        if(min > nums[i]){
            min = nums[i] ;
        }
    }
    return min ;
};