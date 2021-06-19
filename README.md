## iw-btc
>> This project provides a simple package to realize the core logic of the wallet. If you have any questions, please ask at the following website
[icanwallet](https://github.com/icanwallet/icanwallet)

## use case

``` javascript
//from mnemonic
const ecc = require('iw-btc/iw-address')
const wallet = ecc.fromMnemonic(mnemonic)
console.log(wallet)
//from privateKey
const wallet2 = ecc.fromPrivateKey(wallet.privateKey)
console.log(wallet2)
//check address
console.log(ecc.isAddress(wallet.address))

```