class Solution {
public:
    bool isIsomorphic(string s, string t) {

        // method => 1 
        unordered_map<char , char> m1 , m2 ;
        for(int i = 0 ; i < s.size() ; i++){
            if(m1.count(s[i]) && m1[s[i]] != t[i])return false ;
            if(m2.count(t[i]) && m2[t[i]] != s[i])return false ;

            m1[s[i]] = t[i] ;
            m2[t[i]] = s[i] ; 
        }
        return true ;



        // method => 2
        // unordered_map<char , char> m1 , m2 ;
        // for(int i = 0 ; i < s.size() ; i++){
        //     m1[s[i]] = t[i] ;
        //     m2[t[i]] = s[i] ;
        // }
        // for(int i = 0 ; i < s.size() ; i++){
        //     if(m1[s[i]] != t[i]) return false ;
        //     if(m2[t[i]] != s[i])return false ;
        // }
        // return true ;



        // method => 3
        // map<char , char> map ;
        // for(int i = 0 ; i < s.size() ; i++){
        //     map[s[i]] = t[i] ;
        // }
        // for(auto i : map){
        //     for(auto j : map){
        //         if( i != j && map[i.first] == map[j.first]){
        //             return false ;
        //         }
        //     }
        // }
        // for(int i = 0 ; i < s[i] ; i++){
        //     if(map[s[i]] != t[i]){
        //         return false ;
        //     }
        // }
        // return true ;
    }
};