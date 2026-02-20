class Solution {
public:
    string reversePrefix(string word, char ch) {
        int count = 0 ;
    for(int i = 0 ; i < word.size() ; i++){
        if(word[i] == ch){
            count = i ;
            break ;
        }
    }
    string s = "" ;
    for(int i = count ; i >= 0 ; i --){
        s = s + word[i] ;
    }
    for(int i = count + 1 ; i < word.size() ; i++){
        s = s + word[i] ;
    }
    return s ;
    }
};