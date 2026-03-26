class Solution {
public:
    int countOdds(int low, int high) {
        return int((high-low)/2) + (low%2==1 || high%2==1) ;
    }
};