let data = process.argv.slice(2)
console.log("data ",data)

let goodData = data.join('').split(',')
console.log('goodData ',goodData)

let total = 0
for (element of goodData) {
  total = total + +element
  console.log('element ',element, total)
}

console.log("Result: ", total)

