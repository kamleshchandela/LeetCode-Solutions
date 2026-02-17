/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    if(nums[0] == nums[1] && nums[1] == nums[2]){
        return "equilateral" ;
    }
    else if(nums[0] == nums[1] || nums[1] == nums[2] || nums[0] == nums[2]){
        return "isosceles" ;
    }
    else if (nums[0] != nums[1] && nums[1] != nums[2] && nums[0] != nums[2]){
        return "scalene" ;
    }
};