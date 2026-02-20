/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
        let count1 = 0 ;
        let count2 = 0 ;
        for(let i = 0 ; i < nums.length ; i++){
            if(nums[i] % 2 == 0){
                count1 ++ ;
            }
            else{
                count2 ++ ; 
            }
        }
        for(let i = 0 ; i < count1 + count2 ; i++){
            if(i < count1){
                nums[i] = 0 ;
            }
            else{
                nums[i] = 1 ;
            }
            
        }
        
        return nums ;
    
};