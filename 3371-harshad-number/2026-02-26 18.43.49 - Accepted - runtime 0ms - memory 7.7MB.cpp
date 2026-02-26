class Solution {
public:
    int sumOfTheDigitsOfHarshadNumber(int x) {
        int temp = 0 ; 
        int num = x ;
        while(x>=1){
            temp = x % 10 + temp ;
            x = int(x / 10) ;
        }
        if(num % temp == 0){
            return temp ;
        }
        return -1 ;
    }
};