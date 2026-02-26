/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = -Infinity ;
    for(let i = 0 ; i < height.length ; i++){
        for(let j = i + 1 ; j < height.length ; j++){
            let l = j - i ;
                // if(height[i] > height[j]){
                //     if(max < height[j] * l){
                //         max = height[j] * l ;
                //     }
                // }
                // else{
                //     if(max < height[i] * l){
                //         max = height[i] * l ;
                //     }
                // }
                if(max < (Math.min(height[i],height[j]) * l)){
                    max = Math.min(height[i],height[j]) * l ;
                }
            
        }
    }
    return max ;
};