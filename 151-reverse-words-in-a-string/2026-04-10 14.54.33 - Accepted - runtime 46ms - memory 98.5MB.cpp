class Solution {
public:
    string reverseWords(string s) {
        string str = "" ;
        for(int i = s.size() - 1 ; i >= 0 ; i--){
            if(s[i] == ' '){
                int j = i + 1 ;
                
                while(j < s.size() && s[j] != ' '){
                    str = str + s[j] ;
                    j ++ ;
                }
                if(i > 0 && s[i-1] != ' '){
                    str = str + ' ' ;
                }
                
            }
            if(i == 0 && s[i] != ' '){
                int j = i ;
                while(j < s.size() && s[j] != ' '){
                    str = str + s[j] ;
                    j ++ ;
                }
            }
        }
        string s1 = "" ;
        if(str[0] == ' '){
            
            for(int i = 1 ; i < str.size() ; i++){
                s1 = s1 + str[i] ;
            }
            return s1 ;
        }
        return str ;
    }
};