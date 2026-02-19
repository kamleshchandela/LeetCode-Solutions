/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    var arr = [] ;
    var count = 0 ;
    for(let i = 0 ; i < order.length ; i++){
        for(let j = 0 ; j < friends.length ; j++){
            if(friends[j] == order[i]){
                arr[count] = friends[j] ;
                count ++ ;
            }
        }
    }
    return arr ;
};