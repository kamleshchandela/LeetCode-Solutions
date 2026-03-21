class Solution {
public:
    bool checkOnesSegment(string s) {
        for(int i = 0 ; i < s.size() - 1 ; i++){
        if(s[i] == '0'){
            for(int j = 0 ; j < s.size() - 1 ; j++){
                if(s[j] == '0' && s[j+1] != '0'){
                    for(int k = 0 ; k < s.size() - 1 ; k++){
                        if (s[k] == '1' && s[k + 1] != '1'){
                            return false ;
                        }
                    }
                    return true ;
                }
            }
            return true ;
        }
        else{
            for(int j = 0 ; j < s.size() - 1 ; j++){
                if(s[j] == '1' && s[j+1] != '1'){
                    for(int k = 0 ; k < s.size() - 1 ; k++){
                        if (s[k] == '0' && s[k + 1] != '0'){
                            return false ;
                        }
                    }
                    return true ;
                }
            }
            return true ;
        }
        
    }
    return true ;
    }
};