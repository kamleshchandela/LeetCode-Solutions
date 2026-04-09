class Solution {
public:
    bool isCircularSentence(string sentence) {
        if(sentence[0] == sentence[sentence.size() - 1]){
            return true ;
        }
        return false ;
    }
};