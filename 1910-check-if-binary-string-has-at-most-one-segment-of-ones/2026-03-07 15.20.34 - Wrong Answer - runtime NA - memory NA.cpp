class Solution {
public:
    bool checkOnesSegment(string s) {
        for(int i = 0 ; i < s.size() ; i++){
            if(s[i] == '1' && s[i+1] == '1'){
                return true ;
            }
        }
        return false ;
    }
};