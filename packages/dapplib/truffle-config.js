require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift reward stereo column hunt lobster equal ghost'; 
let testAccounts = [
"0x2d406d642f37e9ffc1fc58db503bd0cbb5de12da90569f665674f76c08a06c47",
"0xec99f55044fbe7ee37f80d34c1409663107bf8acad19b9c625333d07769ae6ca",
"0xa92740f9cdbafc802aea203693a631569aa061a89dcc3f5840aff21e7cbba944",
"0x251951137d68f607964805882221034bc6427078d61dd8ef83589c0f828eb154",
"0x164fb5d18075f817ed168e2a37552a237cf77d50754793fab0568d2f1cc9ebc2",
"0x4a17facad6c45d2a0d81b94ad2ee099aaf3815361c75a6ab5b5c27f1d0d0fdd7",
"0xebb0eaa6f9899b4d0421279fca507eadd519e8a0b14ca51d52416f878a990ffd",
"0x75f2c62ac40840e7230ff84eff6b2e17a8cc40901c132b63eb8995ea7381339b",
"0x19872cdcc532d9088401dcc22292df1d7b8597026fbeb9b3edbe8d39444a8286",
"0x0364baa9eefa3a09e0201b17e9f79fe3ac67f95fd744da144d6a7b9ca5ada3a0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


