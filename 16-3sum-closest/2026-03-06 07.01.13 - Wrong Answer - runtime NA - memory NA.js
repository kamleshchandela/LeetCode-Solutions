/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length >= 3){
        let sum = nums[0] + nums[1] + nums[2] ;
        let min = Infinity ;
        let closer = 0 ;
        for(let i = 0 ; i < nums.length - 2 ; i++){
            let sum = nums[i] + nums[i+1] + nums[i+2] ;
            let diff = sum - target ;
            if(diff < 0){
                diff = -diff ;
            }
            if(diff < min){
                min = diff ;
                closer = sum ;

            }
        }
        return closer ;

    }
    return 0 ;
};