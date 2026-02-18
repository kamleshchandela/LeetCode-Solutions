class Solution {
public:
    bool checkIfPangram(string sentence) {
    string s = "abcdefghijklmnopqrstuvwxyz" ;

    for(int i = 0 ; i < s.size() ; i++){
            int check = true ;
                for(int j = 0 ; j < sentence.size() ; j++){
                    if(s[i] == sentence[j]){
                        check = false ;
                        break ;
                    }
                }
                if(check){
                    return false ;
                }
            }

                return true ;
            

            }
};