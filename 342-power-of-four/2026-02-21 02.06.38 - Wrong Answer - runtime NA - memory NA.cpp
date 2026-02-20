class Solution {
public:
    bool isPowerOfFour(int n) {
        for(int i = 0 ; i < 2147483647 ; i ++){
            if(n == i * i * i * i){
                return true ;
            }
            if(i * i * i * i > n){
                return false ;
            }
        }
        return false ;
    }
};