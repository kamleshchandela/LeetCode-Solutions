class Solution {
public:
    bool areOccurrencesEqual(string s) {
        map<char , int> obj ;
        for(int i = 0 ; i < s.size() ; i++){
            // if(obj[s[i]] == 0){
            //     obj[s[i]] = 1 ;
            // } 
            // else{
            //     obj[s[i]] += 1 ;
            // }

            // agar obj[s[i]] nahi he to uski value 0 he jo ham upar chech karva rahehe to isiliye ham sidha obj[s[i]]++ likha sakte he or code ko aasan kar sakte he 

            obj[s[i]]++ ;
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