/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = 0 ; j < matrix.length ; j ++){
            for(let k = 0 ; k < matrix.length ; k++){
                if(matrix[i][j] == matrix[i][k] && j != k && matrix[i][j] <= matrix.length && matrix[i][k] <= matrix.length){
                    return false ;
                }
            }
        }
    }
    return true ;
};