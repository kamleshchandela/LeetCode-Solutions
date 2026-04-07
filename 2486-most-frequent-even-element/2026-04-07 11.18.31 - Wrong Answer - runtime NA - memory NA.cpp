class Solution {
public:
    int mostFrequentEven(vector<int>& nums) {
        map<int , int> map ;
        int max = 0  ;
        int ans = -1 ; 
        for(int i = 0 ; i < nums.size() ; i++){
            map[nums[i]] ++ ;
            if((map[nums[i]] > max) && (nums[i] % 2 == 0)){
                max = map[nums[i]] ;
                ans = nums[i] ;
            }
        }
        return ans ;


    }
};