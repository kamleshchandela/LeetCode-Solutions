class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        sort(nums.begin() , nums.end());
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] == nums[i+1]){
                return nums[i] ;
            }
        }
        // map<int , int> map ;
        // for(int i = 0 ; i < nums.size() ; i++){
        //     map[nums[i]]++ ;
        //     if(map[nums[i]] == 2){
        //         return nums[i] ;
        //     }
        // }
        return -1 ;
    }
};