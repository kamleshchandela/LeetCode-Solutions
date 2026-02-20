class Solution {
public:
    int scoreOfString(string s) {
        int sum = 0 ; 
        for(int i = 0 ; i < s.size() - 1 ; i ++){
            int a = int(s[i]) - int(s[i + 1]) ;
            if(a > 0){
                sum = sum + a ;
            }
            else{
                sum = sum + a * (-1) ;
            }
        }
        return sum ;
        }
};