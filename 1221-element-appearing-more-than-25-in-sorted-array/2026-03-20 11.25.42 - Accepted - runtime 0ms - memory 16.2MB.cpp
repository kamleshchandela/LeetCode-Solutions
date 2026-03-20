class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int count = 1 ;
        for(int i = 0 ; i < arr.size() - 1 ; i++){
            if(arr[i] == arr[i+1]){
                count ++ ;
            }
            else{
                if(count > arr.size()/4){
                    return arr[i] ;
                }
                count = 1 ;
            }
        }
        return arr[arr.size()-1] ;
    }
};