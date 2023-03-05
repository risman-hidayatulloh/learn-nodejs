const {EventEmitter} = require('events')

const myEventEmitter = new EventEmitter()

const makeCoffee = (name) => {
  console.log(`Coffe ${name} already done`)
}

const makeBill = (price) => {
  console.log(`Bill for ${price} already done`)
}

myEventEmitter.on('coffee-order', makeCoffee)
myEventEmitter.on('coffe-order', makeBill)

myEventEmitter.emit('coffee-order', {name: 'Americano', price: 15000})
