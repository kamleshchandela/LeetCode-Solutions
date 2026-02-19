class Solution {
public:
    bool isAnagram(string s, string t) {
        for(int i = 0 ; i < s.size() ; i ++){
            bool check = true ;
            for(int j = 0 ; j < s.size() ; j ++){
                if(s[i] == t[j]){
                    check = false ;
                    break ;
                }
            }
            if(check){
                return false ;
            }
        }
        return true ;
    }
};