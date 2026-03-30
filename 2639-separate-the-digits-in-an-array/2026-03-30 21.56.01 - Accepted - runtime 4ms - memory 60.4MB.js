/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr = [] ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > 9){
            let arr1 = [] ;
            let n = nums[i] ;
            while(n>=1){
                let temp = n % 10 ;
                n = parseInt(n / 10) ;

                arr1.push(temp) ;
            }
            for(let j = arr1.length - 1 ; j >= 0 ; j--){
                arr.push(arr1[j]) ;
            }
        }
        else{
            arr.push(nums[i]) ;
        }
    }
    return arr ;
};