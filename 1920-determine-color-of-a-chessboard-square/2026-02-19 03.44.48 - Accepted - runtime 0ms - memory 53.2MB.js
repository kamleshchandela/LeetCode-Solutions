/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    var s1 = ["a" , "c" , "e" , "g"] ;
    var s2 = ["b" , "d" , "f" , "h"] ;


    for(let i = 0 ; i < 4 ; i++){
        if((coordinates[0] == s2[i] && Number(coordinates[1]) % 2 == 1) || (coordinates[0] == s1[i] && Number(coordinates[1]) % 2 == 0)){
            return true ;
        }
        
    }

    return false ;
    






};