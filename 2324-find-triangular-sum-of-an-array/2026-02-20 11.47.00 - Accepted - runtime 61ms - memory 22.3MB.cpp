class Solution {
public:
    int triangularSum(vector<int>& nums) {
        while(nums.size() > 1){
            for(int i = 0 ; i < nums.size() - 1 ; i++){
                int a = (nums[i] + nums[i+1]) % 10 ;
                nums[i] = a ;
            }
            nums.pop_back() ;
        }
        return nums[0] ;
        }
};