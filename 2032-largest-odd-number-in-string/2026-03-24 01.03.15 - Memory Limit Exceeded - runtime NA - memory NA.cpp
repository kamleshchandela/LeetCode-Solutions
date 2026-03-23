class Solution {
public:
    string largestOddNumber(string num) {
        string s = "" ;
        string max = "" ;
        for(int i = 0 ; i < num.size() ; i++){
            s = s + num[i] ;
            if(num[i]%2==1){
                if(max.size()<s.size()){
                    max = s ;
                }
            }
        }
        return max ;
    }
};