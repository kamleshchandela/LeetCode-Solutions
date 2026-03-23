class Solution {
public:
    bool areOccurrencesEqual(string s) {
        map<char , int> obj ;
        for(int i = 0 ; i < s.size() ; i++){
            if(obj[s[i]] == 0){
                obj[s[i]] = 1 ;
            } 
            else{
                obj[s[i]] += 1 ;
            }
        }
        int check = obj[s[0]] ; 
        for(auto &i : obj){
            if(i.second != check){
                return false ;
            }
        }
        return true ;
    }
};