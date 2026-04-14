/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let k = 1 ;
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] != nums[i-1]){
            nums[k] = nums[i] ; 
            k++ ;
        }
    }
    return k ;

    // let i = 0;
    // for(let j = 0 ; j < nums.length ; j++){
    //     if(nums[j] != nums[j+1]){
            
    //         i++;
    //     }
    //     else{
    //         nums.splice(i , 1) ;
    //         j -- ;
    //     }
    // }
    // console.log(i - 1) ;
    // return i ;
};