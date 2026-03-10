/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        let count = 0 ; 
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[i] == nums[j]){
                count ++ ;
            }
        }
        let check = true ;
        for(let j = 2 ; j < (count / 2) + 1 ; j++){
            if(count % j == 0){
                check = false ;
                break ;
            }
        }
        if(check && count > 1){
            return true ;
        }
    }
    return false ;
};