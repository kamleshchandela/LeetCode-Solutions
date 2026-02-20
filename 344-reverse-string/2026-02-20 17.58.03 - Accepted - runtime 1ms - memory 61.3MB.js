/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var l = 0 ;
    var r = s.length - 1 ;
    var n ;
    if(s.length % 2 == 0){
        n = s.length / 2 ;
    }
    else{
        n = (s.length - 1) / 2
    }
    for (let i = 0 ; i < n ; i++){
        var temp = s[l] ;
        s[l] = s[r] ;
        s[r] = temp ;

        l++ ;
        r-- ;
    }
    return s ;
};