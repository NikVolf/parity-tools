var net = require("net");
var Web3 = require("web3");
var web3 = new Web3();
var ipc_path = '/home/nikvolf/.parity/jsonrpc.ipc';
web3.setProvider(new web3.providers.IpcProvider(ipc_path, net));

var next = 0;

function next_block(err, block) {
	err && console.err(err) || (block && console.log("block " + next + " ok"));
	web3.eth.getBlock(next++, true, next_block);
}

next_block(false, false);