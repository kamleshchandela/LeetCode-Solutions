class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int i = 0 ; 
        int j = 0 ; 
        int k = 0 ;
        bool check = true ;
        string s = "" ;
        while(k < word1.size() + word2.size() - 1){
            if(i<word1.size() && check == true){
                s = s + word1[i] ;
                i ++ ;
                check = false ; 
            }
            else if(j<word2.size() && check == false){
                s = s + word2[j] ;
                j ++ ;
                check = true ; 
            }
            if(i==word1.size() || j==word2.size()){
                break ;
            }
            k++ ;
        }
        if(i==word1.size()){
            for(int l = j ; l < word2.size() ; l++){
                s = s + word2[j] ;
                j++ ;
            }
        }
        if(j==word2.size()){
            for(int l = i ; l < word1.size() ; l++){ 
                s = s + word1[i] ; 
                i++ ; 
            }
        }
        return s ;
    }
};