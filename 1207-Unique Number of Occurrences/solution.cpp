class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        map<int , int> map ;
        for(int i = 0 ; i < arr.size() ; i++){
            map[arr[i]]++ ;
        }
        for(auto i : map){
            for(auto j : map){
                if(j.first != i.first && i.second == j.second){
                    return false ;
                }
            }
        }
        return true ; 
    }
};