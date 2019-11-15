const Block = require('./block')
const BlockChain = require('./blockchain')

//create a new blockchain//
let myBlockChain = new BlockChain()

//create new new blocks//
let block1 = new Block(1, '11/14/19', {balance : 100})
let block2 = new Block(2, '11/14/19', {balance : 680})

//add blocks to blockchain//
console.log('First block in creation')
myBlockChain.addBlock(block1)
//add blocks to blockchain//
console.log('Second block in creation')
myBlockChain.addBlock(block2)

//output of current blockchain//
console.log(JSON.stringify(myBlockChain, null, 4))

//for validity of the blockchain//
// console.log(`The validity of blockchain  :  ${myBlockChain.verifyBlockchain()}`)

//jjust a demo for tampering & verification method//
// myBlockChain.chain[1].data = {b : 7000}
// console.log(`The validity of blockchain  :  ${myBlockChain.verifyBlockchain()}`)