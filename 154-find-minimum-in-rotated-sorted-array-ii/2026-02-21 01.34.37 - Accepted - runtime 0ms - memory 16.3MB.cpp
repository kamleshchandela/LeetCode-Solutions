class Solution {
public:
    int findMin(vector<int>& nums) {
        int min = 2147483647 ;     ////// 2 ** 31 - 1 = 2147483647 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(min > nums[i]){
                min = nums[i] ;
            }
        }
        return min ;
        }
};