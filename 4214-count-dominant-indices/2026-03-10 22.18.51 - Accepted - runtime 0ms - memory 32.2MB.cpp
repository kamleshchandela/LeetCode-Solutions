class Solution {
public:
    int dominantIndices(vector<int>& nums) {
        int count = 0 ; 
        for(int i = 0 ; i < nums.size() ; i++){
            int sum = 0 ; 
            for(int j = i + 1 ; j < nums.size() ; j++){
                sum = sum + nums[j] ;
                
            }
            if(nums[i] * (nums.size() - 1 - i) > sum){
                    count++ ;
                }

        }
        return count ;
    }
};