/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let max = 0 ;
    let maxf = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        let count = 1 ; 
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[i] == nums[j]){
                count ++ ;
            }
        }
        if(maxf < count ){
            maxf = count ;
        }
        if(max < count){
            max = count ;
        }
        else if (maxf == count){
            max = max + count ;
        }
    }
    return max ;
};