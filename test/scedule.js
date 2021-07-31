var schedule = require('node-schedule');


schedule.scheduleJob('20 * * * * *', async function() {
    getNNDailyChannelPv()
})


async function getNNDailyChannelPv() {
    var a = []
    a.push("1")
    console.log(a)
}