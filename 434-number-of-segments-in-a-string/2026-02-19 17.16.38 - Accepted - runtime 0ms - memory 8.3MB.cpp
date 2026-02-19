class Solution {
public:
    int countSegments(string s) {
        int count = 0 ; 
        for(int i = 0 ; i < s.size() ; i++){
            if(s[i] != ' ' && i == 0){
                count ++ ;
            }
            else if (s[i] == ' ' && s[i + 1] != ' ' && i + 1 != s.size()){
                count ++ ;
            }


        }
        return count ;
        }
};