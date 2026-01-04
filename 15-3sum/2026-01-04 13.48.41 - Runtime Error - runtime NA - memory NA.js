/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var arr = [] ;
    var ans = [] ;
    var obj = {};
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length ; j++){
            for(let k = 0 ; k < nums.length ; k++){
                arr = [] ;
                if(nums[i] + nums[j] + nums[k] == 0){
                    if((((!obj[nums[i]] && !obj[nums[j]]) || (!obj[nums[j]] && !obj[nums[k]]) ||
                        (!obj[nums[k]] && !obj[nums[i]])) || !obj[nums[i]]) || !obj[nums[j]]) || !obj[nums[k]]) || (nums[i]==nums[j]==nums[k]==0)){
                        obj[nums[i]] = nums[i] ;
                        obj[nums[j]] = nums[j] ;
                        obj[nums[k]] = nums[k] ;
                        arr.push(nums[i]) ;
                        arr.push(nums[j]) ;
                        arr.push(nums[k]) ;
                        // console.log(i , j , k )
                        // nums.splice(j , 1) ;
                        ans.push(arr) ;
                        
                    }
                    
                    
                }
                    
            }
        }
        // console.log(ans)
        // console.log(obj)
    }
    return ans ;
};