class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        sort(nums.begin() , nums.end()) ;
        int a ;
        int b ;
        if(nums[0] == 1){
            for(int i = 0 ; i < nums.size() - 1 ; i++){
                if(nums[i] == nums[i+1] - 1 || nums[i] == nums[i+1]){
                    a = nums[i] + 1 ;
                }
            }
        }
        else{
            a = 1 ;
        }
        
        for(int i = 0 ; i < nums.size() - 1 ; i ++){
            if(nums[i] != nums[i+1] || nums[i] != nums[i+1] - 1){
                b = nums[i] ;
            } 
        }
        return {b,a} ;
    }
};