/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var s = "" ;
    for(let i = 0 ; i < address.length ; i++){
        if(address[i] == "."){
            s = s + "[.]" ;
        }
        else{
            s = s + address[i] ;
        }
    }
    return s ;
};