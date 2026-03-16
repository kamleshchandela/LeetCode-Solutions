class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i++){
            int index = 0 ;
            int max = -2147483648 ;
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
        int sum = 0 ; 
        for(int i = 0 ; i < nums.size() ; i = i + 2){
            sum = sum + min(nums[i] , nums[i+1]) ;
        }
        return sum ;
    }
};