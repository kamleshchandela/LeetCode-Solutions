class Solution {
public:
    double myPow(double x, int n) {
        double mul = 1 ;
        if(n >= 0){
           for(int i = 0 ; i < n ; i++){
                mul = mul * x ;
            } 
        }
        else{
            n = n * -1 ;
            for(int i = 0 ; i < n ; i++){
                mul = mul * x ;
            } 
            return 1 / mul ;
        }
        

        return mul ;
    }
};