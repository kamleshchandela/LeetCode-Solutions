/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    for (let i = 0 ; i < nums.length ; i++){
        var check = 1 ;
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[i] == nums[j] && i != j && check == 1){
                check = 0 ;
                break ;
            }
        }
        if(check == 1){
            return nums[i] ;
        }
    }
};