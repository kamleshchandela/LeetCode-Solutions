class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> arr(nums.size()) ;
        int mul = 1 ;
        int count = 0 ; 
        int index = 0 ; 
        for(int i = 0 ; i < nums.size() ; i++){
            
            if(nums[i] != 0){
                mul = mul * nums[i] ;
            }
            else{
                index = i ;
                count ++ ;
            }
            if(count > 1){ 
            for(int i = 0 ; i < nums.size() ; i++){
                nums[i] = 0 ;
            }  
                return nums ;
            } 
            
        }
        if(count == 1){
            for(int i = 0 ; i < nums.size() ; i++){
                if(i == index){
                    arr[i] = mul ;
                }
                else{
                    arr[i] = 0 ;
                }
            }
            return arr ;
        }
        for(int i = 0 ; i < nums.size() ; i++){
            arr[i] = mul / (nums[i] != 0 ? nums[i] : 1) ;
        }
        return arr ;
    }
};