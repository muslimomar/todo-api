const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');



var message = "I am user number 3";
var hash = SHA256(message).toString();

var data = {
  id: 4
}

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }


var token = jwt.sign(data, '123abc');
// console.log("Token: " + token);

var decoded = jwt.verify(token, '123abc');
// console.log("\n Decoded: " + JSON.stringify(decoded));


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// console.log(hash);
// console.log(data);
const {User} = require('./../server/models/user');
var user = new User({email: 'email@gmail.com', password: '123456'});
console.log(user);
console.log(user.toObject());
