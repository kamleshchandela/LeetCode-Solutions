class Solution {
public:
    int countPrefixes(vector<string>& words, string s) {
        int count = 0 ;
    for(int i = 0 ; i < words.size() ; i++){
        int check = true ;
        for(int j = 0 ; j < words[i].size() ; j++){
            if(words[i][j] != s[j]){
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