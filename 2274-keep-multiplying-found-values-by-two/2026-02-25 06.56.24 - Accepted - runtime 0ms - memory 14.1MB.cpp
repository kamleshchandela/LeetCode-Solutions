class Solution {
public:
    int findFinalValue(vector<int>& nums, int original) {
        int check = true ;
        int n = original ;
        int first = true ;
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] == n){
                first = false ;
            }
        }
        if(first){
            return n ;
        }
        while(check){
            check = false ;
            for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] == n * 2){
                check = true ;
                n = n * 2 ;
            }
            }
            if(check == false){
                return n * 2 ;
            }
        }
        return 1 ;
    }
};