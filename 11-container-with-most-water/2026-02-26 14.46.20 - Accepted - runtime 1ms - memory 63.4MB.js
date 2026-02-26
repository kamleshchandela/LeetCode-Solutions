/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = -Infinity ;
    let l = 0 ;
    let r = height.length - 1 ;
    while(l < r){
        let length = r - l ;
        if(max < Math.min(height[l],height[r]) * length){
            max = Math.min(height[l],height[r]) * length ;
        }
        if(height[l] < height[r]){
            l ++ ;
        }
        else{
            r -- ; ;
        }
    }
    
    return max ;
};