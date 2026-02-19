class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> arr(nums.size() * 2) ;
        for(int i = 0 ; i < nums.size() ; i++ ){
            arr[i] = nums[i] ;
        }
        for(int i = 0 ; i < nums.size() ; i++ ){
            arr[nums.size() + i] = nums[i] ;
        }
        return arr ;
        }
};