class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        for(int i = 0 ; i < n ; i++ ){
            nums1[m + i] = nums2[i] ;
        }
        for(int i = 0; i < nums1.size() ; i ++){
            int max = 0 ; 
            int index = 0 ; 
            for(int j = 0 ; j < nums1.size() - i ; j++){
                if(max < nums1[j]){
                    max = nums1[j] ;
                    index = j ; 
                }
            }
            int temp = nums1[index] ;
            nums1[index] = nums1[nums1.size() - 1 - i] ;
            nums1[nums1.size() - 1 - i] = temp ;
        }
    }
};