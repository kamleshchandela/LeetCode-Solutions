/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {} ;
    for(let i = 0 ; i< nums.length ; i++){
        if(obj[nums[i]] == nums[i]){
            return true ;
        }
        if(!obj[nums[i]]){
            obj[nums[i]] = nums[i] ;
        }
    }
    return false ;
};