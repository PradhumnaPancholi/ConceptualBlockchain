const Block = require('./block')

class Blockchain {

    constructor(){
        this.chain = [this.generateGenesisBlock()]
    }

    generateGenesisBlock(){
        return new Block(0, '07/11/2019', "This is the genesis block", "0")
    }
}