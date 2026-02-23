/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0 ;
    let max = 0 ;
    for(let i = 0 ; i < gain.length ; i++){
        sum = sum + gain[i] ;
        if(max < sum){
            max = sum ;
        }
    }
    return max ;
};