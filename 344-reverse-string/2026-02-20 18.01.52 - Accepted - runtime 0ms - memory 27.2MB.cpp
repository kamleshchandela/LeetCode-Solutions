class Solution {
public:
    void reverseString(vector<char>& s) {
        int l = 0 ;
        int r = s.size() - 1 ;
        int n ;
        if(s.size() % 2 == 0){
            n = s.size() / 2 ;
        }
        else{
            n = (s.size() - 1) / 2 ;
        }
        for (int i = 0 ; i < n ; i++){
            int temp = s[l] ;
            s[l] = s[r] ;
            s[r] = temp ;

            l++ ;
            r-- ;
        }
        }
};