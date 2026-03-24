class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> arr ;
        int check = 0 ;
        for(int i = 0 ; i < nums.size() ; i++){
            for(int j = 0 ; j < nums.size() ; j++){
                if(nums[i]+nums[j]==target && i != j){
                    arr.push_back(i);
                    arr.push_back(j);
                    check = 1 ;
                    break ;
                }
            }

            if(check){
                break ;
            }
        
        
    }

    return arr ;
    }
};