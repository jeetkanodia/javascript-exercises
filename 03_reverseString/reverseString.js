const reverseString = function( s) {
    let s1=''
    for(let i = s.length-1; i>=0;i--)
    s1 +=s[i];

    return s1;
};

// Do not edit below this line
module.exports = reverseString;
