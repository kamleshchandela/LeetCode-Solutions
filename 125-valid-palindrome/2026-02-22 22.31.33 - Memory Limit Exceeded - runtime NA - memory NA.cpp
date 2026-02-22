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
            int l = 0 ;
            int r = str.size() - 1 ;
                while(l < r){
                    if(str[l] != str[r]){
                        return false ;
                    }
                    l++ ;
                    r-- ;
                    
                
            }
            return true ;
    }
};