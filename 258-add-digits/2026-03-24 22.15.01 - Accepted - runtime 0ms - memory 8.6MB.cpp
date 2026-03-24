class Solution {
public:
    int addDigits(int num) {
        bool check = true ;
        while(check){
            int temp = 0 ; 
            while(num>=1){
                temp = temp + num % 10 ; 
                num = int(num / 10) ;
            }
            if(temp > 9){
                num = temp ;
                check = true ;
            }
            else {
                check = false ;
                return temp ;
            }
        }
        return 0 ;
    }
};