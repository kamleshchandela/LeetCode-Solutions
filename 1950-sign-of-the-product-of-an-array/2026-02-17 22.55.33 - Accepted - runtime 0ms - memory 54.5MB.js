/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var mul = 1 ;
    for(let i = 0 ; i < nums.length ; i++){
        mul = mul * nums[i] ; 
    }
    if(mul > 0){
        return 1 ; 
    }
    else if (mul < 0){
        return -1 ; 
    }
    else {
        return 0 ; 
    }
};