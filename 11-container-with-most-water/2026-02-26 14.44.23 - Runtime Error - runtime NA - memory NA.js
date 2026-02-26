/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = -Infinity ;
    let l = 0 ;
    let r = height.length - 1 ;
    while(l < r){
        let length = j - i ;
        if(max < Math.min(height[i],height[j]) * length){
            max = Math.min(height[i],height[j]) * length ;
        }
        if(height[l] < heitht[r]){
            l ++ ;
        }
        else{
            r ++ ;
        }
    }
    
    return max ;
};