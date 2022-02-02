require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stock raise machine evidence hunt light army genius'; 
let testAccounts = [
"0x1dab25e48c48da937363462bafe8c69322a68c74ecc18cc98d7be6e7291457de",
"0x004ebf4a58f67a7c08af1e6423bc4172d6d8ccb3f7f686e830ee3b5ef6cfc3eb",
"0x124a698f772af25ac9af6fb9d7988607f68870545e74a7e783b572209677b8fe",
"0xced073c6634d26297835e00416146e983eb09a01701ce503d257c46ac967e53d",
"0x07ca33533b4e95d8674ebef071de706235466ea4be79fde5e1d8fbcf6ef604a7",
"0x71963f9334af2cba6304045afc5efea7f8918b76b038ae2c6de9f9dc38894c23",
"0xbaa2d1ce65452336615e94ec766317481a807f1d91ca7dfcd885dc76213c95bf",
"0x2e59d16c1a68dde804600702bc17b368fc9b644c20f4a858b929665acc918b2a",
"0x4a95d3a4bb2823afc0da89133a292d9dabfbc21d91974a92e1579a420174cda0",
"0x2bfb8d7af107e86fbe8fe4fd4545bd1e2cc564b4eb624855cc2f6c9b783575ad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

