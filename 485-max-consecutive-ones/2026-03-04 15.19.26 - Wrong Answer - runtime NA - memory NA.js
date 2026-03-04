/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0 ; 
    let max = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == nums[i + 1] == 1){
            count ++ ;
        }
        else if(nums[i] == 1){
            if(max < count + 1){
                max = count + 1 ;
            }
            count = 0 ;
        }
    }
    return max ;
};