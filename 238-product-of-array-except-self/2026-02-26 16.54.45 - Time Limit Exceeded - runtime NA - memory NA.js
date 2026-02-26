/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = [] ;
    let count = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        let mul = 1 ;
        for(let j = 0 ; j < nums.length ; j++){
            if(i != j){
                mul = mul * nums[j] ;
            }
        }
        arr[count] = mul ;
        count ++ ;
    }
    return arr ;
};