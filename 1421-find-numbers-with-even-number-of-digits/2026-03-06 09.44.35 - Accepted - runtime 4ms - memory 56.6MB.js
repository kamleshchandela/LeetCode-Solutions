/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) { 
    let ans = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        let count = 0 ;
        while(nums[i] >= 1){
            count ++ ;
            nums[i] = parseInt(nums[i] / 10) ; 
        }
        if(count % 2 == 0){
            ans ++ ;
        }
    }
    return ans ;
};