// const message = (name) => {
//   console.log(`Hello ${name}!`);
// };

// message("World");

// console.log(Object.getOwnPropertyNames(global));

//Latihan: Process Object
const initialMemoryUsage = process.memoryUsage().heapUsed
const yourName = process.argv[2]
const environment = process.env.NODE_ENV

for (let i = 0; i <= 10000; i++) {
  // process loop for memory usage up
}

const currentMemoryUsage = process.memoryUsage().heapUsed

console.log(`Hai, ${yourName}`)
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`)

//compile: NODE_ENV=development node ./index.js RH
