class Solution {
public:
    bool canBeEqual(string s1, string s2) {
        for(int i = 0 ; i < s1.size() - 2 ; i ++){
            if(s1[i] != s2[i]){
                if(!((s1[i+2] == s2[i])&&(s1[i] == s2[i+2]))){
                    return false ;
                }
            }
        }
        int l = s1.size() ;
        if(s1[l - 1] != s2[l - 1]){
            if((s1[l - 3] != s2[l - 1]) || (s1[l - 1] != s2[l - 3])){
                return false ;
            }
        }
        if(s1[l - 2] != s2[l - 2]){
            if((s1[l - 4] != s2[l - 2]) || (s1[l - 2] != s2[l - 4])){
                return false ;
            }
        }
        return true ;
    }
};