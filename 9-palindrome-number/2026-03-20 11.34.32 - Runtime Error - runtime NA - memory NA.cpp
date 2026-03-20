class Solution {
public:
    bool isPalindrome(int x) {
    if(x < 0){
        return false ;
    }
    else {
        int num = 0 ;
        int ans = x ;
        while(x >= 1){
            int temp = x % 10 ;
            num = num * 10 + temp ;
            x = int(x / 10) ;
        }
        if(num == ans){
            return true ;
        }
        else{
            return false ;

        }
        }
    }
};