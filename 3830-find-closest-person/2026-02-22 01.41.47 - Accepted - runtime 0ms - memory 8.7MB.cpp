class Solution {
public:
    int findClosest(int x, int y, int z) {
        int a = x - z ;
        int b = y - z ;
        if(a < 0){
            a = -a ;
        }
        if(b < 0){
            b = -b ;
        }
        if(a < b){
            return 1 ;
        }
        else if (a > b){
            return 2 ;
        }
        else {
            return 0 ;
        }
    }
};