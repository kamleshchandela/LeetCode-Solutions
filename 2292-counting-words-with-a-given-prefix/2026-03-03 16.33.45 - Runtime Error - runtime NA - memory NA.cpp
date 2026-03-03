class Solution {
public:
    int prefixCount(vector<string>& words, string pref) {
        int count = 0 ;
        for(int i = 0 ; i < words.size() ; i++){
            bool check = true ;
            for(int j = 0 ; j < pref.size() ; j++){
                if(words[i][j] != pref[j]){
                    check = false ;
                }
            }
            if(check){
                count ++ ;
            }
        }
        return count ;
    }
};