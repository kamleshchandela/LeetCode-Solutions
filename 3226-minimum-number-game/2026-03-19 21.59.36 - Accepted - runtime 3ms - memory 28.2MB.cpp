class Solution {
public:
    vector<int> numberGame(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i++){
            int max = 0 ; 
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
        for(int i = 0 ; i < nums.size() ; i = i + 2){
            int temp = nums[i] ;
            nums[i] = nums[i+1] ;
            nums[i+1] = temp ;
        }
        return nums ;
    }
};