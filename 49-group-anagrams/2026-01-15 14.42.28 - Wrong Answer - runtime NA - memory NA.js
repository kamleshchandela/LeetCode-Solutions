/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var obj = {} ;
    var arr = [] ;
    // var x = 0 ;
    var y = -1 ;
    for(let i = 0 ; i < strs.length ; i++){
                    
                    
                if(strs[i] == ""){
                    y++ ;
                    arr.push([]) ;
                    arr[y].push(strs[i]) ;
                    continue ;
                }
        
                if(!obj[strs[i]]){
                    arr.push([]) ;
                    obj[strs[i]] = 1 ;
                    y++ ;
                    arr[y].push(strs[i]) ;
                    
                }
        for(let j = i+1 ; j< strs.length ; j++){
            var count = 0 ; 
            // if(strs[i].length == strs[j].length ){
                
                for(let k = 0 ; k < strs[i].length ; k++){
                for(let l = 0 ; l < strs[i].length ; l++){
                        if(strs[i][k] == strs[j][l]){
                            count++ ;
                        }
                    }
                }
                if(count == strs[i].length && !obj[strs[j]]){
                    arr[y].push(strs[j]) ;
                    
                    obj[strs[j]] = 1 ;
                    console.log(obj)
                }
            // }
        }
    }
    console.log(arr)
    return arr ;
};