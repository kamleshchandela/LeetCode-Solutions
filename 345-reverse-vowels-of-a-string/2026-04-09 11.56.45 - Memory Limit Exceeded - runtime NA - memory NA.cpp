class Solution {
public:
    string reverseVowels(string s) {
        vector<char> arr ;
    for(int i = 0 ; i < s.size() ; i++){
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U'){
            arr.push_back(s[i]) ;
        }
    }
    int count = 0 ; 
    string str = "" ;
    for(int i = 0 ; i < s.size() ; i++){
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U'){
            str = str + arr[arr.size() - 1 - count] ;
            count ++ ;
        }
        else{
            str = str + s[i] ;
        }
    }
    return str ;
    }
};