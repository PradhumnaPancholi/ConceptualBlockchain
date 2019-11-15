const SHA256 = require('crypto-js/sha256')

class Block{

    constructor(index, timeStamp, transactions, previousHash = ''){
        this.index = index
        this.timeStamp = timeStamp
        this.transactions = transactions
        this.previousHash = previousHash
        this.hash = this.calculateHash()
        this.nonce = 0
    }

    calculateHash(){
        return SHA256(this.timeStamp + this.previousHash + JSON.stringify(this.transactions) + this.nonce).toString()
    }

    //for proof of work security layer//
    mineNewBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')){
            this.nonce++
            this.hash = this.calculateHash()
        }
    }
}

module.exports = Block