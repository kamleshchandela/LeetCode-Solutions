/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    var min = Infinity ;
    for(let i = 0 ; i < nums.length ; i ++){
        var temp = 0 ; 
        var n = nums[i] ;
        while(n >= 1){
            temp = temp + n % 10 ;
            n = parseInt(n / 10) ;
        }
        if(min > temp){
            min = temp ; 
        }
    }
    return min ;
};