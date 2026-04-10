class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        map<string , vector<string>> map ;
        for(int i = 0 ; i < strs.size() ; i++){
            string s = strs[i] ;
            sort(s.begin() , s.end()) ;
            map[s].push_back(strs[i]) ;
        }

        vector<vector<string>> ans ;
        for(auto i : map){
            ans.push_back(i.second) ;
        }
        return ans ;
    }
};