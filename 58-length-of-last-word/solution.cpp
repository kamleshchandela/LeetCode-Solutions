class Solution {
public:
    int lengthOfLastWord(string s) {
        int count = 0 ; 
        for(int i = s.size() - 1  ; i >= 0 ; i--){
            
            if(s.size() == 1 && s[0] != ' '){
                return 1 ;
            }
            if(s[i] != ' '){
                count ++ ;
            }
        
            else if (count > 0){
                // console.log(count) ;
                return count ;
                
            }

            if (i == 0){
                return count ;
            }

        }
        return count ; 
    }
};