/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    for(let i = 0; i < nums.length ; i++){
        var max = 0 ;
        var index = 0 ;
        for(let j = 0 ;  j < nums.length - i ; j++){
            if(nums[j] > max){
                max = nums[j] ;
                index = j ;
            }
        }
        var temp = nums[index] ;
        nums[index] = nums[nums.length - 1 - i] ;
        nums[nums.length - 1 - i] = temp ;
    }
    var max = 0 ;
    for(let i = 0 ; i < nums.length - 1 ; i++){
        if(nums[i + 1] - nums[i] > max){
            max = nums[i + 1] - nums[i] ;
        }
    }
    return max ;
};