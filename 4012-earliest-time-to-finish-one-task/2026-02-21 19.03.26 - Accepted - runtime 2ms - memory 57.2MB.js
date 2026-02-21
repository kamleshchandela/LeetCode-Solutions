/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    var min = Infinity ;
    for(let i = 0 ; i < tasks.length ; i++){
        var sum = 0 ; 
        for(let j = 0 ; j < tasks[i].length ; j++){
            sum = sum + tasks[i][j] ;
        }
        if (min > sum){
            min = sum ;
        }
    }
    return min ;
};