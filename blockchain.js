const Block = require('./block')

class Blockchain {

    constructor(){
        this.chain = [this.generateGenesisBlock()]
    }

    generateGenesisBlock(){
        return new Block(0, '07/11/2019', "This is the genesis block", "0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().previousHash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }
}