/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0 ;
    for(let i = 0 ; i < height.length ; i++){
        for(let j = i + 1 ; j < height.length ; j++){
            if(height[i] <= height[j]){
                if(i - j == 1){
                    continue ;
                }
                else{
                    let extra = 0 ;
                    for(let k = i ; k < j ; k++){
                        if(height[k] > Math.min(height[i],height[j])){
                            height[k] = Math.min(height[i],height[j])
                            }
                        extra = extra + height[k] ;
                    }
                    sum = sum + Math.min(height[i],height[j]) * (j-i) - extra ;;
                    i = j ;
                }
            }
        }
    }
    return sum ;
        
};