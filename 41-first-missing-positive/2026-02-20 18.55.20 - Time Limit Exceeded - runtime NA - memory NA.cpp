class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i ++){
            int k = i + 1 ;
            bool check = true ; 
            for(int j = 0 ; j < nums.size() ; j++){
                if(nums[j] == k){
                    check = false ;
                    break ;
                }
            }
            if(check){
                return k ;
            }
        }
        return nums.size() + 1 ;
        }
};