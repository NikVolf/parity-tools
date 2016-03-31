```
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"to":"0xf0160428a8552ac9bb7e050d90eeade4ddd52843","value":"0xff22","gasPrice":"0x051da038cc","gas":"0xffffff"}],"id":1}' http://localhost:8545
-> {"jsonrpc":"2.0","result":"0xffffff","id":1}
```
