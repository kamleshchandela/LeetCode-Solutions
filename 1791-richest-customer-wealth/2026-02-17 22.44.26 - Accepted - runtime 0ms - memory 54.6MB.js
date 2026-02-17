/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var sum = 0 ;
    var max = -Infinity ;
    for(let i = 0 ; i < accounts.length ; i++){
        var sum = 0 ; 
        for(let j = 0 ; j < accounts[i].length ; j++){
            sum = sum + accounts[i][j] ;
        }
        if(max < sum){
            max = sum ;
        }
    }
    return max ;
};