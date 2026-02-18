class Solution {
public:
    bool kLengthApart(vector<int>& nums, int k) {
        for(int i = 0 ; i < sizeof(nums)/4 ; i++){
                if(nums[i] == 1){
                    for(int j = i + 1 ; j <= i + k ; j++){
                        if(nums[j] == 1){
                            return false ;
                        }
                    }
                }
            }
            return true ;
        }
};