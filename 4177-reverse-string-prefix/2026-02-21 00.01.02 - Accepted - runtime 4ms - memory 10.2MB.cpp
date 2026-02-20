class Solution {
public:
    string reversePrefix(string s, int k) {
        string str = "" ;
        for(int i = k - 1 ; i >= 0 ; i --){
            str = str + s[i] ;
        }
        for(int i = k ; i < s.size() ; i++){
            str = str + s[i] ;
        }
        return str ;
        }
};