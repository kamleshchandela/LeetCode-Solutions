/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    if(num % 3 == 0){
        let a = num / 3 ;
        return [(a - 1) , a , (a + 1)]
    }
    return [] ;
};