/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        let max = 0 ; 
        let index = 0 ;
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
    for(let i = 0 ; i < nums.length ; i = i + 2){
        let temp = nums[i] ;
        nums[i] = nums[i+1] ;
        nums[i+1] = temp ;
    }
    return nums ;
};