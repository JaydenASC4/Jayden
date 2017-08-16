function encrypt(fireMessage){
    var result = ""; 
    for (i=0 ; i<fireMessage.length ; i++){
        var letterCode = fireMessage.charCodeAt(i);
        var binary = letterCode.toString(2);
        while (binary.length<8){
            binary = "0" + binary;
        }
        //console.log(binary);
        result = result + binary;
    }
    return result;
}


function decrypt(message){
    var chunk;
    var result = "";

    for (var i = 0 ; i<message.length ; i+=8){
        chunk = message.substring(i,i+8);
        var charCode = parseInt(chunk,2);
        var char = String.fromCharCode(charCode);
        result += char;
    }
    return result;
}

// var encryptedMsg = encrypt("Sneak Sneaky");
// console.log(encryptedMsg);
// var decryptedMsg = decrypt(encryptedMsg);
// console.log(decryptedMsg);

function xorMsg(bitstring,message){
    var result = "";
    for (i=0 ; i<message.length ; i++ ){
        if (message[i] == bitstring[i]){
            result += "0";
        }
        else{
            result += "1";
        }
    }
    return result
}

var bitString = "100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110";

var origMessage = "planet10" ;
var origBinary = encrypt(origMessage);
console.log("The original Binary: " + origBinary);
var xorBinary = xorMsg(bitString,origBinary)
var newBinary = xorMsg(bitString,xorBinary);
var newMsg = decrypt(newBinary);
console.log("The new Message: " + newMsg);

//console.log(encrypt("Sneak Sneaky"));


var xoring = xorMsg(bitString,origMessage);
var xoredMsg = decrypt(xoring);
console.log(xoredMsg);