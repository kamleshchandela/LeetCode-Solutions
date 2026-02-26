class Solution {
public:
    int maxArea(vector<int>& height) {
        int max = -2147483648 ;
        int l = 0 ;
        int r = height.size() - 1 ;
        while(l < r){
            int length = r - l ;
            if(max < min(height[l],height[r]) * length){
                max = min(height[l],height[r]) * length ;
            }
            if(height[l] < height[r]){
                l ++ ;
            }
            else{
                r -- ;
            }
        }
        
        return max ;
    }
};