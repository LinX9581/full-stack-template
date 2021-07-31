var crypto = require('crypto');

function cryptPwd(password) {
    var md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}
let y = 2021
let m = 4
let d = 12
let r = y + (m * 3 + 2) + (d * 2)
let code = r + "uat-nn-client"
let pordCode = r + "prod-nn-client"
console.log( cryptPwd(code) );
console.log( cryptPwd(pordCode) );

let a = "123,156,151"
var arr = a.split(',');
// console.log(arr)