/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var k = 0 ;
    for(let i = 0 ; i < nums.length ; i ++){
        for(let j = 0 ; j < nums.length - i ; j++){
            if(nums[j] == val){
                var temp = nums[j] ;
                nums[j] = nums[nums.length - 1 - k] ;
                nums[nums.length - 1 - k] = temp ;
                k++;
                break ;
            }
        }
    }
    return nums.length - k ;
};