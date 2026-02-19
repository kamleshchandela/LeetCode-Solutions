class Solution {
public:
    bool checkValid(vector<vector<int>>& matrix) {
        for(int i = 0 ; i < matrix.size() ; i++){
        for(int j = 0 ; j < matrix.size() ; j ++){
            for(int k = 0 ; k < matrix.size() ; k++){
                if(matrix[i][j] == matrix[i][k] && j != k && matrix[i][j] <= matrix.size() && matrix[i][k] <= matrix.size()){
                    return false ;
                }
            }
        }
    }

    for(int i = 0 ; i < matrix.size() ; i++){
        for(int j = 0 ; j < matrix.size() ; j++){
            for(int k = 0 ; k < matrix.size() ; k++ ){
                if(matrix[j][i] == matrix[k][i] && j != k && matrix[j][i] <= matrix.size() && matrix[k][i] <= matrix.size()){
                    return false ;
                }
            }
        }
    }

    return true ;
    }
};