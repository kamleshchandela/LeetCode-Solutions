class Solution {
public:
    int gcdOfOddEvenSums(int n) {
        int sum1 = 0 ;  
        int sum2 = 0 ;  
        for(int i = 1 ; i <= n * 2 ; i++){
            if(i % 2 == 0){
                sum1 = sum1 + i ;
            }
            else{
                sum2 = sum2 + i ;
            }
            
        }
        if(sum1 < sum2){
            for(int i = sum1 ; i > 0 ; i-- ){
                if(sum1 % i == 0 && sum2 % i == 0 ){
                    return i ;
                }
            }
        }
        else{
            for(int i = sum2 ; i > 0 ; i-- ){
                if(sum1 % i == 0 && sum2 % i == 0 ){
                    return i ;
                }
            }
        }
        return 0 ;
    }

};