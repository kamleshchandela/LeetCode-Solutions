/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i = 0 ; i < nums.length - 1 ; i++){
        if(nums[i] == nums[i+1]){
            nums[i] = nums[i] * 2 ;
            nums[i+1] = 0 ; 
        }
    }
    // let count = 0 ; 
    // for(let i = 0 ; i < nums.length && count < parseInt(nums.length / 2) ; i++){
    //     if(nums[i] == 0){
    //         for(let j = nums.length - 1 ; j > i ; j--){
    //             if(nums[j] != 0){ 
    //                 nums[i] = nums[j] ;
    //                 nums[j] = 0 ;
    //                 break ;
    //             }
    //         }
    //     }
    // }
    // return nums ; 

    let count = 0 ; 
    for(let i = 0 ; i < nums.length ; i++){
         if(nums[i] != 0){
            nums[count] = nums[i] ;
            count ++ ;
         }
    }
    for(let i = count ; i < nums.length ; i++){
        nums[i] = 0 ;
    }

    return nums ;




};