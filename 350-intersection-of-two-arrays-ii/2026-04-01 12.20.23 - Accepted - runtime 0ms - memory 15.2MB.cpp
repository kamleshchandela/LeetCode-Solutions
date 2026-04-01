class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        map<int , int> map1 ;
        map<int , int> map2 ;
        vector<int> arr ;
        for(int i = 0 ; i < nums1.size() ; i++){
            map1[nums1[i]]++ ;
        }
        for(int i = 0 ; i < nums2.size() ; i++){
            map2[nums2[i]]++ ;
        }
        for(auto k : map1){
            int l = min(map1[k.first] , map2[k.first]) ;
            for(int j = 0 ; j < l ; j++){
                arr.push_back(k.first) ;
            }
        }
        return arr ;
    }
};