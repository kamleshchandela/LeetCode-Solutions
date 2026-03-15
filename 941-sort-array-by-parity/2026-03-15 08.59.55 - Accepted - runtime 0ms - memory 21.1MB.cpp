class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& nums) {
        vector<int> arr1 ;
        vector<int> arr2 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] % 2 == 0){
                arr1.push_back(nums[i]) ;
            }
            else{
                arr2.push_back(nums[i]) ;
            }
            
        }
        for(int i = 0 ; i < arr2.size() ; i++){
            arr1.push_back(arr2[i]) ;
        }
        return arr1 ;
    }
};