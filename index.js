const script = require('./script')

module.exports = {
  Block: require('./block'),
  ECPair: require('./ecpair'),
  Transaction: require('./transaction'),
  TransactionBuilder: require('./transaction_builder'),
	//classify : require('./classify'),
  address: require('./address'),
  wallet: require('./iw-address'),
  bip32: require('./bip32'),
  bip39: require('./bip39'),
  crypto: require('./crypto'),
  networks: require('./networks'),
  opcodes: require('./bitcoin-ops'),
  payments: require('./payments'),
  script: script
}
