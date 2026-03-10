/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let obj = {} ;
    for(let i = 0 ; i < nums.length ; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1 ;
        }
        else{
            obj[nums[i]] += 1 ;
        }
    }
    let max = 0 ;
    for(let i in obj){
        if(obj[i] > max){
            max = obj[i] ;
        }
    }
    let count = 0 ; 
    for(let i in obj){
        if(obj[i] == max){
            count ++ ;
        }
    }
    return max * count ;
};