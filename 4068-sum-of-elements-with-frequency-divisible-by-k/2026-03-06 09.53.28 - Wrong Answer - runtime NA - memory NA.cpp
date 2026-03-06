class Solution {
public:
    int sumDivisibleByK(vector<int>& nums, int k) {
        int sum = 0 ;
        for(int i = 0 ; i < nums.size() ; i++){
            int count = 1 ;
            for(int j = i + 1 ; j < nums.size() ; j++){
                if(nums[i] == nums[j]){
                    count ++ ;
                }
            }
            if(count % k == 0){
                sum = sum + (nums[i] * count) ;
            }
            i = i + count - 1 ;
        }
        return sum ;
    }
};