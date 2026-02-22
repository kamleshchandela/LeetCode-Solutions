class Solution {
public:
    bool isPalindrome(string s) {
            string str = "" ;
            for(int i = 0 ; i < s.size() ; i++ ){
                if(s[i] >= 'A' && s[i] <= 'Z' || s[i] >= 'a' && s[i] <= 'z' || s[i] >= '0' && s[i] <= '9'){
                if(int(s[i]) >= 65 && int(s[i]) <= 90){
                    int a = int(s[i]) + 32 ;
                    str = str + char(a) ;
                }
                else{
                    str = str + s[i] ;
                }
                }

            }
            if(str.size() == 1) return true ;
            for(int i = 0 ; i < int(s.size() / 2) ; i++){
                if(str[i] != str[str.size() - 1 - i]){
                    return false ;
                }
            }
            return true ;
    }
};