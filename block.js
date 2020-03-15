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
}
module.exports = Block