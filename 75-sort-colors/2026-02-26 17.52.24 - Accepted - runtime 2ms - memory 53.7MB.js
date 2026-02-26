/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        let max = -Infinity ;
        let index = 0 ; 
        for(let j = 0 ; j < nums.length - i ; j++){
            if(max < nums[j]){
                max = nums[j] ;
                index = j ;
            }
        }
        let temp = nums[index] ;
        nums[index] = nums[nums.length - 1 - i] ; 
        nums[nums.length - 1 - i] = temp ;
    }
    return nums ;
};