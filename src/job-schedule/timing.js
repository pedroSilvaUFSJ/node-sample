const schedule = require('node-schedule')
let taskCounter = 0
/**
 * meanining of the timmer on schedule
        *    *    *    *    *    *
        ┬    ┬    ┬    ┬    ┬    ┬
        │    │    │    │    │    |
        │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
        │    │    │    │    └───── month (1 - 12)
        │    │    │    └────────── day of month (1 - 31)
        │    │    └─────────────── hour (0 - 23)
        │    └──────────────────── minute (0 - 59)
        └───────────────────────── second (0 - 59, OPTIONAL)
 *
 */
const task1 = schedule.scheduleJob('*/1 * 23 * * 0', function () {
    taskCounter++
    console.log(`running task1:${taskCounter}!`, new Date(),)
})

setTimeout(function () {
    task1.cancel()
    console.log('cancellling task1')
}, 10000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 00

const task2 = schedule.scheduleJob(rule, () => {
    console.log(`running task2:${taskCounter}!`, new Date())
    taskCounter++
})