/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var obj = {} ; 
    for(let i = 0 ; i < nums.length ; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1 ;
        }
        else{
            obj[nums[i]] += 1 ;
        }
    }
    var arr = [] ;
    var count = 0 ; 
    for(let i in obj){
        if(obj[i] == "1"){
            arr[count] = Number(i) ;
            count ++ ;
        }

    }
    return arr ;
};