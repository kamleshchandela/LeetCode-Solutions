class Solution {
public:
    vector<int> selfDividingNumbers(int left, int right) {
        vector<int> arr ;
        for(int i = left ; i <= right ; i++ ){
                int n = i ;
                bool check = true ;
                
                int temp = 0 ;
                while(n>=1){
                    temp = n % 10 ;
                    n = int(n/10) ;
                    if(temp == 0 || i % temp  !=  0){
                        check = false ;
                        break ;
                    } 
                }
                if(check){
                    arr.push_back(i) ;
                }

            

        }
        return arr ;
    }
};