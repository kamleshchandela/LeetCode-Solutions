class Solution {
public:
    string intToRoman(int num) {
        vector<int> arr1 = {
            1000 , 900 , 500 , 400 , 100 , 90 , 50 , 40 , 10 , 9 , 5 , 4 , 1
        } ;
        vector<string> arr2 = {
            "M" , "CM" , "D" , "CD" , "C" , "XC" , "L" , "XL" , "X" , "IX" , "V" , "IV" , "I"  
        } ;
        int i = 0 ; 
        string s = "" ; 
        
            for(int i = 0 ; i < arr1.size() ; i++){
                while(num + 1 > arr1[i]){
                        num = num - arr1[i] ;
                        s = s + arr2[i] ;
                }
            }
        return s ;
        }
};