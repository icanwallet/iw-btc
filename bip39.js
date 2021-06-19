const Buffer = require('iwcrypto/utils/safe-buffer').Buffer
const pbkdf2_1 = require("iwcrypto/pbkdf2")
const bip32 = require('./bip32')
export function mnemonicToSeedSync(mnemonic, password = '') {
	const mnemonicBuffer = Buffer.from((mnemonic || '').normalize('NFKD'), 'utf8');
	const saltBuffer = Buffer.from(salt((password || '').normalize('NFKD')), 'utf8');
	return pbkdf2_1.pbkdf2Sync(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512');
}

function salt(password) {
	return 'mnemonic' + (password || '');
}

export function toSeed(mnemonic, network) {
	let seed = mnemonicToSeedSync(mnemonic);
	return bip32.fromSeed(seed, network);
}

