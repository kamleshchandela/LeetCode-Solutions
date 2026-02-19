class Solution {
public:
    int divide(int dividend, int divisor) {
        if(divisor == -1){
            return (dividend * (-1)) ;
        }
        return int(dividend / divisor) ;
    }
};