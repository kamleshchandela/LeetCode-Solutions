class Solution {
public:
    int vowelStrings(vector<string>& words, int left, int right) {
        int count = 0 ; 
        for(int i = left ; i <= right ; i++){
            int l = words[i].size() - 1 ;
            if((words[i][0] == 'a' || words[i][0] == 'e' || words[i][0] == 'i' || words[i][0] == 'o' || words[i][0] == 'u') && (words[i][l] == 'a' || words[i][l] == 'e' || words[i][l] == 'i' || words[i][l] == 'o' || words[i][l] == 'u')){
                count ++ ;
            }
        }
        return count ;
    }
};