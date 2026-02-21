class Solution {
public:
    vector<int> sortEvenOdd(vector<int>& nums) {
        for(int i = 0 ; i < nums.size() ; i++){
            if(i % 2 == 0){
            for(int j = 0 ; j < nums.size() ; j = j + 2){
                if(nums[i] < nums[j] && j % 2 ==0){
                    int temp = nums[i] ;
                    nums[i] = nums[j] ;
                    nums[j] = temp ;
                }
                

                }
            }
            else{
                for(int j = 1 ; j < nums.size() ; j = j + 2){
                if(nums[i] > nums[j] && j % 2 == 1){
                    int temp = nums[i] ;
                    nums[i] = nums[j] ;
                    nums[j] = temp ;
                }
                

                }
            }
        }
        return nums ;

    }
};