/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    var str1 = "" ;
    var str2 = "" ;
        for(let i = 0 ; i < date.length ; i++){
            if(date[i] == "-"){
                str2 = str2 + Number(str1).toString(2) + "-" ;
                str1 = "" ;
            }
            else{
                str1 = str1 + date[i] ;
            }
            
        }
        str2 = str2 + Number(str1).toString(2) ;
        return str2 ;
    
};