/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let arr = [] ;
    if(nums.length % k == nums.length){
        return nums ;
    }
    let count = 0 ; 
    for(let i = nums.length - k ; i < nums.length ; i++){
        arr[count] = nums[i] ;
        count ++ ;
    }
    for(let i = 0 ; i < nums.length - k ; i++){
        arr[count] = nums[i] ;
        count ++ ;
    }
    for(let i = 0 ; i < nums.length ; i++){
        nums[i] = arr[i] ;
    }
    return nums ;
};