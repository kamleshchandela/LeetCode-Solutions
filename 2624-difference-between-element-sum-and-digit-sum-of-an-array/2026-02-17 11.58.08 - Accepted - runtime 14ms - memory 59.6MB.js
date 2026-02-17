/**
 * @param {number[]} nums
 * @return {number}
 */


function sep (n) {
    if(n.length == 1){
        return n ;
    }
    var temp = 0 ;
    while(n>=1){
        temp = temp + n % 10 ;

        n = parseInt(n / 10) ;
    }

    return temp ;
}


var differenceOfSum = function(nums) {
    var sum1 = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        sum1 = sum1 + nums[i] ;
    }

    var sum2 = 0 ; 
    for(let i = 0 ; i < nums.length ; i++){
        var value = sep(nums[i]);
        sum2 = sum2 + value ;
    }


    var ans = sum1 - sum2 ;

    if(ans >= 0){
        return ans ;
    }
    else{
        return -ans ;
    }






};