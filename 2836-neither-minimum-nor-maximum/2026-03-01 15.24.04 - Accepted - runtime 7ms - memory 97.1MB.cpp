class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        int max = -2147483648 ;
        int min = 2147483647 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] > max){
                max = nums[i] ;
            }
            if(nums[i] < min){
                min = nums[i] ;
            }
        }
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] != max && nums[i] != min){
                return nums[i] ;
            }
        }
        return -1 ;
    }
};