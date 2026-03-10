/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    let count = 0 ; 
    for(let i = 0 ; i < nums.length ; i++){
        let sum = 0 ; 
        for(let j = i + 1 ; j < nums.length ; j++){
            sum = sum + nums[j] ;
            
        }
        if(nums[i] * (nums.length - 1 - i) > sum){
                count++ ;
            }

    }
    return count ;
};