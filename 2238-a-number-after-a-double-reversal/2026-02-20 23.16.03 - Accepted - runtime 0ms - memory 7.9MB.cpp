class Solution {
public:
    bool isSameAfterReversals(int num) {
         int n1 = num ;
        int temp1 = 0 ;
        int temp2 = 0 ;
        while(n1 >= 1){
            temp1 = temp1 * 10 + n1 % 10 ;
            n1 = int(n1 / 10) ; 
        }
        while(temp1 >= 1){
            temp2 = temp2 * 10 + temp1 % 10 ;
            temp1 = int(temp1 / 10) ; 
        }
        if(temp2 == num){
            return true ;
        }
        return false ;


        }
};