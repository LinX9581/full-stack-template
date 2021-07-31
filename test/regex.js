// let isWord = /^[A-z \u4e00-\u9fa5]+$/;

// console.log(isWord.test("我"));

let a = '20210422-138031'
let b = a.match(/\d{8}/)[0]
    // b= a.match(/-\d{6}/)[0].replace(/(\/|-),'')
    // b.match(/-\d{6}/)[0]
    // console.log(b);

let c = '@!EDS#/20210428/3293356/%#$##EDS#R!F'
let d = c.match(/\/\d{7}\//g)[0].replace(/\//g, '')
console.log(d); //output 3293356