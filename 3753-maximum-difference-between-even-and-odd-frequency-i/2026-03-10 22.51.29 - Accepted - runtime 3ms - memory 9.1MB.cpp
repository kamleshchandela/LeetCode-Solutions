class Solution {
public:
    int maxDifference(string s) {
        int e1 = -2147483648 ;
        int e2 = 2147483647 ;
        int o1 = -2147483648 ;
        int o2 = 2147483647 ;
        for(int i = 0 ; i < s.size() ; i ++) {
            int count = 0 ; 
            for(int j = 0 ; j < s.size() ; j++){
                if(s[i] == s[j]){
                    count ++ ;
                }
            }    
            if(count % 2 == 0){
                if(e1 < count){
                    e1 = count ;
                }
                if(e2 > count){
                    e2 = count ;
                }
            }
            else{
                if(o1 < count){
                    o1 = count ;
                }
                if(o2 > count){
                    o2 = count ;
                }
            }
        }
        int a = 0 ;
        int b = 0 ;
        if(o1 > o2){
            a = o1 ;
        }
        else{
            a = o2 ;
        }
        if(e1 > e2){
            b = e2 ;
        }
        else{
            b = e1 ;
        }
        return a - b ;
    }
};