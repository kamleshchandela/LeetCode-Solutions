class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        sort(nums.begin() , nums.end()) ;
        int count = 0 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] > 0){
                count ++ ;
                if(nums[i] != count){
                    return count ;
                }
            }
        }
        return nums[nums.size() - 1] + 1 ;
    }
};