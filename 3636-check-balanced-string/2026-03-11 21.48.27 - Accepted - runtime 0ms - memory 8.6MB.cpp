class Solution {
public:
    bool isBalanced(string num) {
        int s1 = 0 ; 
        int s2 = 0 ; 
        for(int i = 0 ; i < num.size() ; i++){
            if(i%2==0){
                s1 = s1 + (num[i] - '0') ;
            }
            else{
                s2 = s2 + (num[i] - '0') ;
            }
        }
        if(s1 == s2){
            return true ;
        }
        else{
            return false ;
        }
    }
};