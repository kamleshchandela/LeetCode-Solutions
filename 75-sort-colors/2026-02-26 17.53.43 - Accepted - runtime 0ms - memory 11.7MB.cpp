class Solution {
public:
    void sortColors(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i++){
            int max = -2147483648 ;
            int index = 0 ; 
            for(int j = 0 ; j < nums.size() - i ; j++){
                if(max < nums[j]){
                    max = nums[j] ;
                    index = j ;
                }
            }
            int temp = nums[index] ;
            nums[index] = nums[nums.size() - 1 - i] ; 
            nums[nums.size() - 1 - i] = temp ;
        }
    }
};