class Solution {
public:
    double myPow(double x, int n) {
        float mul = 1 ;
        for(int i = 0 ; i < n ; i++){
            mul = mul * x ;
        }

        return mul ;
    }
};