class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        int a , b = 0 ; 
        map<int , int> map ;
        for(int i = 0 ; i < grid.size() ; i++){
            for(int j = 0 ; j < grid[i].size() ; j++){
                map[grid[i][j]]++ ;
            }
        }
        for(int i = 1 ; i <= grid.size() * grid.size() ; i++){
            if(map[i] == 0){
                a = i ;
            }
            if(map[i] == 2){
                b = i ;
            }
        }
        return {b , a} ;
    }
};