// const message = (name) => {
//   console.log(`Hello ${name}!`);
// };

// message("World");

// console.log(Object.getOwnPropertyNames(global));

const initialMemoryUsage = process.memoryUsage().heapUsed
const yourName = process.argv[2]
const environment = process.env.NODE_ENV

for (let i = 0; i <= 10000; i++) {
  // console.log(i)
}

const currentMemoryUsage = process.memoryUsage().heapUsed

console.log(`Hai, ${yourName}`)
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`)

// NODE_ENV=development node ./index.js RH (for compile)
