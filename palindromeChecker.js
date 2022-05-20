/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let palindrome = ""
    for (var i = string.length - 1; i >= 0; i--) {
        palindrome += string[i];
    }
    if (palindrome === string){
        return true
    }
    else{
        return false
    }
    
    
};
