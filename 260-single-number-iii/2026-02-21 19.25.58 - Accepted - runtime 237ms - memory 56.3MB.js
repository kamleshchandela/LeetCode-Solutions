/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var arr = [] ; 
    var k = 0 ; 
    for(let i = 0 ; i < nums.length ; i++){
        var count = 0 ;
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[i] == nums[j]){
                count ++ ;
            }
        }
        if(count == 1){
            arr[k] = nums[i] ;
            k++ ;
        }
    }
    return arr ;
};