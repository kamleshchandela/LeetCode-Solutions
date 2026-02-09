/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var arr = [] ;
    var x = 0 ;
    var y = n ;
    var z = 1 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(z==1){
            arr[i] = nums[x] ;
            x++ ;
            z = 0 ;
        }
        else{
            arr[i] = nums[y] ;
            y++ ;
            z = 1 ;
        }
        
    }
    return arr ;
};