/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var arr = [] ;
    for(let i = 0 ; i < k ; i++){
        for(let j = 0 ; j < nums.length ; j++){
            if(j == 0){
                nums[j] = nums[nums.length - 1];
            }
            else if (j == nums.length - 1){
                nums[j] = nums[j - 1] ;
            }
            else{
                nums[j] = nums[j+1] ;
            }

        }
    }
    return nums ;
};