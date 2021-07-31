console.log(/^news\/[a-z]\/\d{12}/ig.test("news/heart/300009113377"))
console.log(/\/[a-z]\/[0-9]/ig.test("/heart/300009113377"))
console.log(/\/\d{8}-\d{6}/.test("/20210101-127175"))
    // console.log("/20210101-127175".match(/\/\d{8}-\d{6}/))
console.log("/20210101-127175".match(/\d{6}$/))



var a = "news/dd/16"
var b = "/news/feature/300009106729?from=Yahoo"

// console.log(b.match(/\d{12}/))
// console.log(a.match(/^news\/[a-z]+\/\d{3}$/))
// console.log(/^news\/[a-z]+\/\d{3}$/.test("news/dd/16"))