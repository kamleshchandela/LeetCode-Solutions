/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var arr = [] ;
    var num1 = 0 ;
    for(let i = 0 ; i < n ; i ++){
        var a = `${i + 1}` ;
        if((i + 1) % 3 == 0 && (i + 1) % 5 == 0){
            arr[i] = "FizzBuzz" ;
        }
        else if ((i + 1) % 3 == 0){
            arr[i] = "Fizz" ;
        }
        else if ((i + 1) % 5 == 0){
            arr[i] = "Buzz" ;
        }
        else{
            arr[i] = a ;
        }
    }
    return arr ;
};