/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        let index = 0 ;
        let max = -Infinity ;
        for(let j = 0 ; j < nums.length - i ; j++){
            if(max < nums[j]){
                max = nums[j] ;
                index = j ;
            }
        }
        let temp = nums[index] ;
        nums[index] = nums[nums.length - 1 - i] ;
        nums[nums.length - 1 - i] = temp ;
    }
    let sum = 0 ; 
    for(let i = 0 ; i < nums.length ; i = i + 2){
        sum = sum + Math.min(nums[i] , nums[i+1]) ;
    }
    return sum ;
};