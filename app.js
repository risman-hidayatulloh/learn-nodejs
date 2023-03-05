// const server = new Server({
//   host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'www.com',
// })

const cpuInformation = process.memoryUsage()

console.log(cpuInformation)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Hello ${firstName} ${lastName}`)

//compile: node index.js Risman Hidayatulloh

const moment = require('moment')

const date = moment().format('MMMM Do YYYY, h:mm:ss')
console.log(date)

const date2 = new Date().toISOString()
console.log(date2)

const date3 = new Date().toUTCString()
console.log(date3)

const date4 = new Date().toLocaleString()
console.log(date4)

const date5 = new Date().toLocaleDateString()
console.log(date5)

const date6 = new Date().toLocaleTimeString()
console.log(date6)

const date7 = new Date().toDateString()
console.log(date7)

const date8 = new Date().toTimeString()
console.log(date8)
