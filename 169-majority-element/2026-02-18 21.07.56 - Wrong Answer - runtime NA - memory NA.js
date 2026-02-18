/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var obj = {} ;
    var count = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(!obj[nums[i]]){
            count ++ ;
            obj[nums[i]] = 1 ;
        }
        else{
            obj[nums[i]] = obj[nums[i]] + 1 ;
        }
    }
    var max = -Infinity ;
    var ans ;
    for(let i = 0 ; i < count ; i++ ){
        if(obj[nums[i]] > max){
                max = obj[nums[i]] ;
                ans = nums[i] ;
        }
    }
    return ans ;
};