const bip32 = require('./bip32')
const bip39 =  require('./bip39')
const payments = require('./payments')
const networks = require('./networks')
const ECPair = require('./ecpair')
const validator = require('iwcrypto/validator/btc.js')
export function fromMnemonic(mnemonic) {
	let seed = bip39.mnemonicToSeedSync(mnemonic);
	let node = bip32.fromSeed(seed);
	let address = payments.p2pkh({ pubkey: node.publicKey, networks : networks.bitcoin }).address;
	let privateKey = node.toWIF();
	return {
		address,
		privateKey,
		mnemonic
	};
}
export function createPrivateKey(mnemonic, path){
	let seed = bip39.mnemonicToSeedSync(mnemonic);
	//console.log(seed)
	let node = bip32.fromSeed(seed);
	let child = node.derivePath(path);
	return child.privateKey.toString('hex');
}
export function fromPrivateKey(privateKey) {
	let keyPair = ECPair.fromWIF(privateKey);
	let address = payments.p2pkh({ pubkey: keyPair.publicKey, networks : networks.bitcoin }).address;
	return {
		address,
		privateKey,
		mnemonic : ''
	};
}
export function isAddress(address) {
	//console.log(validator)
	return validator(address, 'btc')
}