class Solution {
public:
    int maxProduct(int n) {
        vector<int> arr(20) ; 
        int count = 0 ; 
        while(n >= 1){
            int temp = n % 10 ;
            arr[count] = temp ;
            count++ ;
            n = int(n / 10) ;
        }
        int max = -1 ;
        for(int i = 0 ; i < arr.size() ; i ++){
            for(int j = 0 ; j < arr.size() ; j ++){
                if(max < (arr[i] * arr[j]) && i != j) {
                    max = arr[i] * arr[j] ;
                }
            }
        }
        return max ;
        }
};