class Solution {
public:
    vector<int> getFinalState(vector<int>& nums, int k, int multiplier) {
        int count = 0 ;
        for(int i = 0 ; i < k ; i++){
                int min = 2147483647 ;
                int index = 0 ;
            for(int j = 0 ; j < nums.size() ; j++){
                    if(min > nums[j]){
                        min = nums[j] ;
                        index = j ;
                    }
                
            }
            nums[index] = nums[index] * multiplier ;
            count ++ ;
            if(count == k){
                return nums ;
            }
        }
        return nums ;
        }
};