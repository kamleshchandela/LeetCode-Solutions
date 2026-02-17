/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        nums[i] = nums[i] ** 2 ;
    }
    for(let i = 0 ; i < nums.length ; i++){
        var max = -Infinity ;
        var index = 0 ;
        for(let j = 0 ; j < nums.length - i ; j++ ){
            if(max < nums[j]){
                max = nums[j] ;
                index = j ;
            }
        }
        var temp = nums[index] ;
        nums[index] = nums[nums.length - i - 1] ;
        nums[nums.length - i - 1] = temp ;

    }
    return nums ;
};