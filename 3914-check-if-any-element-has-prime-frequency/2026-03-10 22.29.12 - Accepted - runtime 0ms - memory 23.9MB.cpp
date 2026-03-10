class Solution {
public:
    bool checkPrimeFrequency(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i++){
            int count = 0 ; 
            for(int j = 0 ; j < nums.size() ; j++){
                if(nums[i] == nums[j]){
                    count ++ ;
                }
            }
            bool check = true ;
            for(int j = 2 ; j <= (count / 2) ; j++){
                if(count % j == 0){
                    check = false ;
                    break ;
                }
            }
            if(check && count > 1){
                return true ;
            }
        }
        return false ;
    }
};