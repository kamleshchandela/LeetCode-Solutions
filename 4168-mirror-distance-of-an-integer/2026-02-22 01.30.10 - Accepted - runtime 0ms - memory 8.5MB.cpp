class Solution {
public:
    int mirrorDistance(int n) {
        int num = n ;
        int temp = 0 ;
        while(num >= 1){
            temp = temp * 10 + num % 10 ;
            num = int(num /10) ;
        }
        int a = temp - n ;
        if(temp - n > 0){
            return a ;
        } 
        return a * (-1) ;
    }
};