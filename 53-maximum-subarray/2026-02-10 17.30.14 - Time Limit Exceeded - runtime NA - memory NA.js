/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -Infinity ;
    var sum = 0 ; 
    for(let i = 0 ; i < nums.length ; i++){
        sum = 0 ; 
        for(let j = i ; j < nums.length ; j++){
            sum = sum + nums[j] ;
            if(max < sum){
                max = sum ;
            }
        }
        
    }
    return max ;
};