class Solution {
public:
    bool isValid(string s) {
        vector<char> arr ;
        for(int i = 0 ; i < s.size() ; i++){
            if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
                arr.push_back(s[i]) ;
            }
            else{
                char temp = arr.back() ; 
                arr.pop_back() ;
                if(s[i] == ')' && temp != '('){
                    return false ;
                }
                else if(s[i] == ']' && temp != '['){
                    return false ;
                }
                else if(s[i] == '}' && temp != '{'){
                    return false ;
                }
            }
        }
        return arr.size() == 0 ;
    }
};