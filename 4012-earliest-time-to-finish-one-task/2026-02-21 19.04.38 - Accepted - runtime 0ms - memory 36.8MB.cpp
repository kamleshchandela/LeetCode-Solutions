class Solution {
public:
    int earliestTime(vector<vector<int>>& tasks) {
        int min = 2147483647 ;
        for(int i = 0 ; i < tasks.size() ; i++){
            int sum = 0 ; 
            for(int j = 0 ; j < tasks[i].size() ; j++){
                sum = sum + tasks[i][j] ;
            }
            if (min > sum){
                min = sum ;
            }
        }
        return min ;
    }
};