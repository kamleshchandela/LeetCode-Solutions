class Solution {
public:
    vector<int> separateDigits(vector<int>& nums) {
        vector<int> arr ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] > 9){
            vector<int> arr1 ;
            int n = nums[i] ;
            while(n>=1){
                int temp = n % 10 ;
                n = int(n / 10) ;

                arr1.push_back(temp) ;
            }
            for(int j = arr1.size() - 1 ; j >= 0 ; j--){
                arr.push_back(arr1[j]) ;
            }
        }
        else{
            arr.push_back(nums[i]) ;
        }
    }
    return arr ;
    }
};