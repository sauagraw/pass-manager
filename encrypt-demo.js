var crypto = require('crypto-js');

var secretMessage = {
  name :'Andrew',
  secretName:'007'
};

var secretKey = '123abc';

//encrypt
var encMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('Encrypted Message: '+encMessage);

//Decrypt
var bytes=  crypto.AES.decrypt(encMessage, secretKey);
var decMessage = JSON.parse(bytes.toString(crypto.enc.Utf8)); //JSON.parse will retuen object and not json string

console.log("Decrypted Message object: "+decMessage);
console.log("Decrypted Message string: "+bytes.toString(crypto.enc.Utf8));
