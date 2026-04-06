class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        sort(nums.begin() , nums.end()) ;
        int a = nums.size() ;
        int b = nums[0] ;
        for(int i = 0 ; i < nums.size() - 1 ; i ++){
            if(nums[i] != nums[i+1] || nums[i] != nums[i+1] - 1){
                b = nums[i] ;
            } 
            if(nums[i] == nums[i+1] - 2){
                a = nums[i] + 1 ;
            }
        }
        return {b,a} ;
    }
};