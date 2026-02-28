class Solution {
public:
    char repeatedCharacter(string s) {
        int index = s.size() ;
        char result = 'a' ;
        for(int i = 0 ; i < s.size() ; i++){
            for(int j = i + 1 ; j < s.size() ; j++ ){
                if(s[i] == s[j] && i != j){
                    if(j < index){
                        index = j ;
                        result = s[i] ;
                    }
                }
            }
        }
        return result ;
    }
};