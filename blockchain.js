const Block = require('./block')

class Blockchain {

    constructor(){
        this.chain = [this.generateGenesisBlock()]
    }

    generateGenesisBlock(){
        console.log('Generating genesis block')
        return new Block ('07/11/2019', "This is the genesis block", "0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }

    verifyBlockchain(){
        //loop throught the blockchain//
        for( let i = 1; i < this.chain.length; i++){
            //declare current block and previous block//
            let currentBlock = this.chain[i]
            let previousBlock = this.chain[i-1]

            //check if current block's hash is correct
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false
            }
            //check is value of previous hash in current  block is correct
            if(currentBlock.previousHash !== previousBlock.hash){
                return false
            }

            return true
        }
    }
}

module.exports = Blockchain