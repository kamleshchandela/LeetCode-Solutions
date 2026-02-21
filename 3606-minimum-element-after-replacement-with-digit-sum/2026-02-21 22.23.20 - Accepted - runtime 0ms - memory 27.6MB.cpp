class Solution {
public:
    int minElement(vector<int>& nums) {
        int min = 2147483647 ;
        for(int i = 0 ; i < nums.size() ; i ++){
            int temp = 0 ; 
            int n = nums[i] ;
            while(n >= 1){
                temp = temp + n % 10 ;
                n = int(n / 10) ;
            }
            if(min > temp){
                min = temp ; 
            }
        }
        return min ;
    }
};