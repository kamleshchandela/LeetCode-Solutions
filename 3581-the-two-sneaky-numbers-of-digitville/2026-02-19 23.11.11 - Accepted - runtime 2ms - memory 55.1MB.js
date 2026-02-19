/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    var arr = [] ;
    var count = 0 ;
    var obj = {} ;
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[i] == nums[j] && i != j && !obj[nums[i]]){
                obj[nums[i]] = 1 ;
                arr[count] = nums[i] ;
                count ++ ;
            }
        }
    }
    return arr ;
};