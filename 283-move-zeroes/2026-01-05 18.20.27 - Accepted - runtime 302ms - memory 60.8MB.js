/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var temp = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length - i ; j++){
            if(nums[j] == 0 && j <= nums.length - 2 - i){
                temp = nums[j] ;
                nums[j] = nums[j+1] ;
                nums[j+1] = temp ;
            }
        }
    }
    // console.log(nums) ;
    return nums ;
};