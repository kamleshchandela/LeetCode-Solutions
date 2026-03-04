class Solution {
public:
    int reverse(int x) {
        int temp = 0 ;
        bool check = false ;
        if(x < 0){
            x = -x ;
            check = true ;
        }
        while(x>=1){
        if(temp * 10 >= 214748364 ){
            return 0 ;
        }
        temp = temp * 10 + x % 10 ;
        x = int(x / 10) ;
        }
        if(check) {
            return -temp ;
        }
        return temp ;
    }
};