/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let max = -Infinity ;
    for(let i = 0 ; i < nums.length - 2 ; i++){
        for(let j = i + 1 ; j < nums.length - 1 ; j++){
            for(let k = j + 1 ; k < nums.length ; k++){
                let a= nums[i] * nums[j] * nums[k] ;
                if(a>max){
                    max = a ; 
                }
            }
        }
    }
    return max ;
};