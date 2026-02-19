class Solution {
public:
    int secondHighest(string s) {
        int max1 = -1 ; 
    int max2 = -1 ;
    for(int i = 0 ; i < s.size() ; i++){
        for(int j = 0 ; j < s.size() ; j++){
            if(max1 < int(s[j] - 48) && int(s[j] - 48) < 10 ){
                max2 = max1 ;
                max1 = int(s[j] - 48) ;
            }
            else if (max2 < int(s[j] - 48) && int(s[j] - 48) < max1 && int(s[j] - 48) < 10){
                max2 = int(s[j] - 48) ;
            }
        }
    } 

    return max2 ;

    }
};