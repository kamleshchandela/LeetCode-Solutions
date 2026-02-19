class Solution {
public:
    vector<int> leftRightDifference(vector<int>& nums) {
    vector<int> arr1(nums.size()) ;
    vector<int> arr2(nums.size()) ;
    int sum1 = 0 ;
    int sum2 = 0 ;
    for(int i = 0 ; i < nums.size() ; i++){
        arr1[i] = sum1 ;
        sum1 = sum1 + nums[i] ;
    }
    for(int i = nums.size() - 1 ; i >= 0 ; i--){
        arr2[i] = sum2 ;
        sum2 = sum2 + nums[i] ;
    }
    vector<int> arr(nums.size()) ;
    for(int i = 0 ; i < arr1.size() ; i++){
        int a = arr1[i] - arr2[i] ;
        if(a < 0){
            a = a * (-1) ;
        }
        arr[i] = a ;
    }

    return arr ;
    }
};