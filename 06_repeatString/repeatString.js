const repeatString = function(string, num) { 
    if (num >= 0) {
        let final = "";
        for (let i=0; i<num; i++) {
            final += string;
        }
        return final;
    }  
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
