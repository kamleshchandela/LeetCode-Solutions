class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        map<int , int> map ;
        for(int i = 0 ; i < nums.size() ; i++){
            map[nums[i]]++ ;
            if(map[nums[i]] == 2){
                return nums[i] ;
            }
        }
        return -1 ;
    }
};