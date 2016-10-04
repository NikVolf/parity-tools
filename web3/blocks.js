var net = require("net");
var Web3 = require("web3");
var web3 = new Web3();
var ipc_path = '/home/nikvolf/.parity/jsonrpc.ipc';
web3.setProvider(new web3.providers.IpcProvider(ipc_path, net));

for (var i = 0; i < 2000000; i++) {
  web3.eth.getBlock(i, true, function( err, block ) {
    console.log("block " + i + " ok");
  });
}
