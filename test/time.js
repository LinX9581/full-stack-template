function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
setTimeout(async function () {
    console.log("object");
}, await test());
// test4()
async function test4(){

    await test()
    await test1()
    await test2()
}
async function test() {
    await sleep(3000)
    console.log("3")
}


async function test1() {
    await sleep(1000)
    console.log("1")
}


async function test2() {
    await sleep(5000)
    console.log("5")
}