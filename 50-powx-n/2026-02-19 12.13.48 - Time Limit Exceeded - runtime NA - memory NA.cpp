class Solution {
public:
    double myPow(double x, int n) {
        double mul = 1 ;
        bool check = true ;
        if(n < 0){
            check = false ;
            n = n * (-1) ;
        }
        
        for(int i = 0 ; i < n ; i++){
            mul = mul * x ;
        } 

        if(check){
            return mul ;
        }
        else{
            return 1 / mul ;
        }
           
        

        return mul ;
    }
};