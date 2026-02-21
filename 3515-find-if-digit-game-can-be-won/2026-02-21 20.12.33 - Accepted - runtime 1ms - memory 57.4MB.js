/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    var sum1 = 0 ;
    var sum2 = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] < 10){
            sum1 = sum1 + nums[i] ;
        }
        else{
            sum2 = sum2 + nums[i] ;
        }
    }
    if(sum1 != sum2){
        return true ;
    }
    return false ;
};