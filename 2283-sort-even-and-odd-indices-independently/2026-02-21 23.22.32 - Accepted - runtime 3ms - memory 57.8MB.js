/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        if(i % 2 == 0){
        for(let j = 0 ; j < nums.length ; j = j + 2){
            if(nums[i] < nums[j] && j % 2 ==0){
                var temp = nums[i] ;
                nums[i] = nums[j] ;
                nums[j] = temp ;
            }
            

            }
        }
        else{
            for(let j = 1 ; j < nums.length ; j = j + 2){
            if(nums[i] > nums[j] && j % 2 == 1){
                var temp = nums[i] ;
                nums[i] = nums[j] ;
                nums[j] = temp ;
            }
            

            }
        }
    }
    return nums ;
};