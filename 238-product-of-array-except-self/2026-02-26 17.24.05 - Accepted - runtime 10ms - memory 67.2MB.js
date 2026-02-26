/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = [] ;
    let mul = 1 ;
    let count = 0 ;
    let index = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        
        if(nums[i] != 0){
            mul = mul * nums[i] ;
        }
        else{
            index = i ;
            count ++ ;
        }
        if(count > 1){ 
           for(let i = 0 ; i < nums.length ; i++){
            nums[i] = 0 ;
           }  
            return nums ;
        } 
        
    }
    if(count == 1){
        for(let i = 0 ; i < nums.length ; i++){
            if(i == index){
                arr[i] = mul ;
            }
            else{
                arr[i] = 0 ;
            }
        }
        return arr ;
    }
    for(let i = 0 ; i < nums.length ; i++){
        arr[i] = mul / (nums[i] != 0 ? nums[i] : 1) ;
    }
    return arr ;
};