class Solution {
public:
    string removeTrailingZeros(string num) {
        int count = 0 ; 
        for(int i = num.size() - 1 ; i >= 0 ; i--){
            if(num[i] == '0' && num[i-1] == '0'){
                count++ ;
            }
            else{
                break ;
            }
        }
        string str = "" ;
        if(count > 0){
            count ++ ;
        }
        else if(num[num.size() - 1] == '0' && num[num.size() - 2] != 0){
            for(int i = 0 ; i < num.size() - 1 ; i++){
                str = str + num[i] ;
            }
            return str ;
        }
        for(int i = 0 ; i < num.size() - count ; i++){
            str = str + num[i] ; 
        }
        return str ;
    }
};