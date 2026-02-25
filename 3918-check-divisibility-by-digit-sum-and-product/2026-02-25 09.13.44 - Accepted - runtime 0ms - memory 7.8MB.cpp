class Solution {
public:
    bool checkDivisibility(int n) {
        int sum = 0 ;
        int mul = 1 ; 
        int num = n ;
        while(num >= 1){
            sum = sum + num % 10 ;
            mul = mul * (num % 10) ;
            num = int(num / 10) ;
        }
        if(n % (sum + mul) == 0){
            return true ;
        }
        return false ;
        }
};