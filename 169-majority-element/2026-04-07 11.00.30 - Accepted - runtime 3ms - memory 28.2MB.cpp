class Solution {
public:
    int majorityElement(vector<int>& nums) {
        map<int , int> map ;
        for(int i = 0 ; i < nums.size() ; i++){
            map[nums[i]] ++ ;
        }
        int max = 0 ;
        int ans = 0 ;  
        for(auto i : map){
            if(max < i.second){
                max = i.second ;
                ans = i.first ;
            }
        }
        return ans ;
    }
};