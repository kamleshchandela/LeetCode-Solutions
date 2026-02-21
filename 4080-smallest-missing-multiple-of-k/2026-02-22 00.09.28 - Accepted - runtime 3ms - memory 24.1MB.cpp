class Solution {
public:
    int missingMultiple(vector<int>& nums, int k) {
        if(nums.size() == 1){
            if(k == 1){
                return 1 ;
            }
            else if(k == nums[0]){
                return k * 2 ;
            }
            else{
                return k ;
            }
            
        }
        for(int i = 1 ; i <= nums.size() ; i++){
            int check = true ;
            for(int j = 0 ; j < nums.size() ; j++){
                if(nums[j] == k * i){
                    check = false ;
                    break ;
                }
            }
            if(check){
                return k * i ;
            }
        }
        return k * (nums.size() + 1) ;
    }
};