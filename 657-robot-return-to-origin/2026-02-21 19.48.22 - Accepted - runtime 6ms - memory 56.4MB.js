/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var x = 0 ;
    var y = 0 ;
    for(let i = 0 ; i < moves.length ; i++){
        
        if(moves[i] == "U"){
            y = y + 1 ;
        }
        else if(moves[i] == "D"){
            y = y - 1 ;
        }
        else if(moves[i] == "R"){
            x = x + 1 ;
        }
        else{
            x = x - 1 ;
        }
    }
    if(x == 0 && y == 0){
        return true ;
    }
    return false ;
};