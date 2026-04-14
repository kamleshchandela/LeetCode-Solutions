/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = "" ;
    if(strs.length == 0)return "" ;
    if(strs.length == 1)return strs[0] ;
    for(let j = 0 ; j < strs[0].length ; j++){
        for(let i = 1 ; i < strs.length ; i++){
            if(strs[i][j] != strs[i-1][j]){
                return str ;
            }
        }
        str = str + strs[0][j] ;
    }
    return str ;
};