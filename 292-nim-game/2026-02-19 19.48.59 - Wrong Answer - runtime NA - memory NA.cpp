class Solution {
public:
    bool canWinNim(int n) {
        if(n <= 3 && n >= 1){
            return true ;
        }
        if(n % 3 == 1 && ((n - 1) / 3 )%2 == 0 ){
            return true ;
        }
        else if(n % 3 == 2 && ((n - 2) / 3 ) % 2 == 0){
            return true ;
        }
        else if (n % 3 == 0 && ((n - 3) / 3 ) % 2 == 0){
            return 0 ;
        }
        
            return false ;
        
    }
};