/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    // var ans = arrivalTime + delayedTime ;
    // if(ans > 23){
    //     ans = ans - 24 ;
    // }
    // return ans ;

    return (arrivalTime + delayedTime) % 24 ;
};