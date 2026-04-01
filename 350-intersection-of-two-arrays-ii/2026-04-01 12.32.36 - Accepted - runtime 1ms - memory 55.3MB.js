/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = {} ;
    let map2 = {} ;
    let arr = [] ;
    for(let i = 0 ; i < nums1.length ; i++){
        if(!map1[nums1[i]]){
            map1[nums1[i]] = 1 ;
        }
        else{
            map1[nums1[i]] += 1 ;
        }
    }
    for(let i = 0 ; i < nums2.length ; i++){
        if(!map2[nums2[i]]){
            map2[nums2[i]] = 1 ;
        }
        else{
            map2[nums2[i]] += 1 ;
        }
    }
    for(let k in map1){
        let l = Math.min(map1[k] , map2[k] || 0) ;
        for(let j = 0 ; j < l ; j++){
            arr.push(Number(k)) ;
        }
    }
    return arr ;
};