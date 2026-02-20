/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    var sum = 0 ; 
    for(let i = 0 ; i < nums.length ; i++){
        if(i % 2 == 0){
            sum = sum + nums[i] ;
        }
        else{
            sum = sum - nums [i] ;
        }
    }
    return sum ;
};