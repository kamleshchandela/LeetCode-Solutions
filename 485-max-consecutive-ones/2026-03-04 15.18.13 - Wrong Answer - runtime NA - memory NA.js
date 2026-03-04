/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 1 ; 
    let max = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == nums[i + 1] == 1){
            count ++ ;
        }
        else{
            if(max < count){
                max = count ;
            }
            count = 1 ;
        }
    }
    return max ;
};