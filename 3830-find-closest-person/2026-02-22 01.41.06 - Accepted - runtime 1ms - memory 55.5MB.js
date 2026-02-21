/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    var a = x - z ;
    var b = y - z ;
    if(a < 0){
        a = -a ;
    }
    if(b < 0){
        b = -b ;
    }
    if(a < b){
        return 1 ;
    }
    else if (a > b){
        return 2 ;
    }
    else {
        return 0 ;
    }
};