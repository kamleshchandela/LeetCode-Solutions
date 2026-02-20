/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for(let i = 0 ; i < nums.length ; i ++){
        var k = i + 1 ;
        var check = true ; 
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[j] == k){
                check = false ;
                break ;
            }
        }
        if(check){
            return k ;
        }
    }
    return nums.length + 1 ;
};