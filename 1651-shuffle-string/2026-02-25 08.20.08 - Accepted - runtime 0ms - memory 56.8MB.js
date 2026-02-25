/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let str = "" ;
        for(let i = 0 ; i < indices.length ; i++){
            for(let j = 0 ; j < indices.length ; j++){
                if(indices[j] == i){
                    str = str + s[j] ;
                }
            }
        }
        return str ;
};