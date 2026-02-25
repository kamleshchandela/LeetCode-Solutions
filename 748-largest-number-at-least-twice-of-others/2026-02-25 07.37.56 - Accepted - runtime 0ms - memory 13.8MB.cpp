class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        bool check = true ;
        for(int i = 0 ; i < nums.size() ; i++){
            check = true ;
            for(int j = 0 ; j < nums.size() ; j++){
                if(nums[i] < (nums[j] * 2) && i != j){
                    check = false ;
                    break ;
                }
            }
            if(check){
                return i ;
            }
        }
        return -1 ;
    }
};