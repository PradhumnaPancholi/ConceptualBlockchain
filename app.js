const Block = require('./block')
const BlockChain = require('./blockchain')

//create a new blockchain//
let myBlockChain = new BlockChain()

//create new new blocks//
let block1 = new Block(1, '11/14/19', {balance : 100})
let block2 = new Block(2, '11/14/19', {balance : 680})

//add blocks to blockchain//
myBlockChain.addBlock(block1)
myBlockChain.addBlock(block2)

//output for validation//
console.log(JSON.stringify(myBlockChain, null, 4))