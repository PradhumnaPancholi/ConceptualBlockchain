const SHA256 = require('crypto-js/sha256')

class Block{

    constructor(timeStamp, transactions, previousHash = ''){
        this.timeStamp = timeStamp
        this.transactions = transactions
        this.previousHash = previousHash
        this.hash = this.calculateHash()
    }

    calculateHash(){
        return SHA256(this.timeStamp + this.previousHash + JSON.stringify(this.transactions)).toString()
    }

    //for proof of work security layer// - not in use in current version//
    // mineNewBlock(difficulty){
    //     while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')){
    //         this.nonce++
    //         this.hash = this.calculateHash()
    //     }
    // }
}

module.exports = Block