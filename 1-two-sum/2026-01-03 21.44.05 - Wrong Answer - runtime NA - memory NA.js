/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [] ;
    for(let i = 0 ; i < nums.length ; i++){
    if(nums[i]+nums[i+1]==target){
        arr.push(i);
        arr.push(i + 1);
        break ;
    }
    
}

return arr ;
};


