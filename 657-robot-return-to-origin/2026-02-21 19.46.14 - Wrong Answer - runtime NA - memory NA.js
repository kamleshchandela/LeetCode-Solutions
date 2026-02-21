/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var sum = 0 ; 
    for(let i = 0 ; i < moves.length ; i++){
        
        if(moves[i] == "U"){
            sum = sum + 1 ;
        }
        else if(moves[i] == "D"){
            sum = sum - 1 ;
        }
        else if(moves[i] == "R"){
            sum = sum + 2 ;
        }
        else{
            sum = sum - 2 ;
        }
    }
    if(sum == 0){
        return true ;
    }
    return false ;
};