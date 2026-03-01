/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let max = -2147483648 ;
    let min = 2147483647 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > max){
            max = nums[i] ;
        }
        if(nums[i] < min){
            min = nums[i] ;
        }
    }
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] != max && nums[i] != min){
            return nums[i] ;
        }
    }
    return -1 ;
};