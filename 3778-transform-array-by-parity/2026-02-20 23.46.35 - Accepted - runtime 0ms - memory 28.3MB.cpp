class Solution {
public:
    vector<int> transformArray(vector<int>& nums) {
        int count1 = 0 ;
        int count2 = 0 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] % 2 == 0){
                count1 ++ ;
            }
            else{
                count2 ++ ; 
            }
        }
        for(int i = 0 ; i < count1 + count2 ; i++){
            if(i < count1){
                nums[i] = 0 ;
            }
            else{
                nums[i] = 1 ;
            }
            
        }
        
        return nums ;
    }
};