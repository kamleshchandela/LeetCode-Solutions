class Solution {
public:
    bool checkOnesSegment(string s) {
        if (s == "1") return true ;
        for(int i = 0 ; i < s.size() ; i++){
            if(s[i] == '1' && s[i+1] == '1'){
                return true ;
            }
        }
        return false ;
    }
};