function countBs(word){
    return countChar(word, "B");
}

function countChar(word, character){
    var string = String(word);
    var numChars = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] === character){
            numChars ++;
        }
    }
    return numChars;
}