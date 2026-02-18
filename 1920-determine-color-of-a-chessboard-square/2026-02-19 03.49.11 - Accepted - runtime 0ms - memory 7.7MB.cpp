class Solution {
public:
    bool squareIsWhite(string coordinates) {
        char s1[4] = {'a' , 'c' , 'e' , 'g'} ;
        char s2[4] = {'b' , 'd' , 'f' , 'h'} ;


        for(int i = 0 ; i < 4 ; i++){
            if((coordinates[0] == s2[i] && int(coordinates[1]) % 2 == 1) || (coordinates[0] == s1[i] &&
            int(coordinates[1]) % 2 == 0)){
                return true ;
            }
            
        }

        return false ;
        }
};