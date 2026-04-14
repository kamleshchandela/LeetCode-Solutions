class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string str = "" ;
        if(strs.size() == 0)return "" ;
        if(strs.size() == 1)return strs[0] ;
        for(int j = 0 ; j < strs[0].size() ; j++){
            for(int i = 1 ; i < strs.size() ; i++){
                if(strs[i][j] != strs[i-1][j]){
                    return str ;
                }
            }
            str = str + strs[0][j] ;
        }
        return str ;
    }
};