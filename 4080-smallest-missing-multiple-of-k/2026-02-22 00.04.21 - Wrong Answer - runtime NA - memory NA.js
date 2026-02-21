/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    if(nums.length == 1){
        if(k == 1){
            return 1 ;
        }
        else if(nums[0] % k == 0){
            return k * ( (nums[0] / k) + 1 )
        }
        else{
            return k ;
        }
        
    }
    for(let i = 1 ; i <= nums.length ; i++){
        var check = true ;
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[j] == k * i){
                check = false ;
                break ;
            }
        }
        if(check){
            return k * i ;
        }
    }
};