// const server = new Server({
//   host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'www.com',
// })

const cpuInformation = process.memoryUsage()

console.log(cpuInformation)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Hello ${firstName} ${lastName}`)

//compile: node index.js Risman Hidayatulloh
