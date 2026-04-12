/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [] ;
    var check = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[i]+nums[j]==target && i != j){
                arr.push(i);
                arr.push(j);
                check = 1 ;
                break ;
            }
        }

        if(check){
            break ;
        }
    
    
}

return arr ;
};


