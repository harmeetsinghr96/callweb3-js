const fs = require('fs');
const path = require('path');

class ContractFunc {
    
    constructor() {}

    callFunc(initObj, contractType, name, callType) {
        const abi = this.readJsonFiles(contractType);
        console.log(abi);
        // const gasPrice = await init.web3.eth.getGasPrice();
        // const tx = {
        //   to: initObj.contractAddress,
        //   gasPrice: gasPrice,
        //   gas: initObj.web3.utils.toHex(1000000),
        //   data: initObj.tokenContractObj.methods[name]().encodeABI()
        // };

        return true;
    }

    readJsonFiles(contract) {
        let abi;

        if (contract === 'ERC') {
            const _path = path.resolve(__dirname, "abis", "tokenContractABI.json");
            fs.readFile(_path, "utf8", (err, data) => {
                abi = JSON.parse(data);
            });
        } else if (contract === 'FACTORY') {
            const _path = path.resolve(__dirname, "abis", "contractABI.json");
            fs.readFile(_path, "utf8", (err, data) => {
                abi = JSON.parse(data);
            });
        }

        return abi;
    }
}

module.exports = new ContractFunc();