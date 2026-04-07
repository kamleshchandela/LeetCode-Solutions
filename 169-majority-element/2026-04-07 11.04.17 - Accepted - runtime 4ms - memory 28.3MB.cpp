class Solution {
public:
    int majorityElement(vector<int>& nums) {
        map<int , int> map ;
        for(int i = 0 ; i < nums.size() ; i++){
            map[nums[i]] ++ ;
        }
        for(auto i : map){
            if(nums.size()/2 < i.second){
                return i.first ;
            }
        } 
        return -1 ;
    }
};