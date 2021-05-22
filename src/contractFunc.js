const fs = require('fs');
const path = require('path');

class ContractFunc {
    
    constructor() {}

    async callFunc(initObj, contractType, name, params, privateKey, callType) {
        if (contractType === 'ERC') {
            return await this.signTransactionOnNetworkForERC(initObj, name, params, privateKey, callType);
        } else if (contractType === 'CONTRACT') {
            return await this.signTransactionOnNetworkForMain(initObj, name, params, privateKey, callType);
        }
      

        return abi;
    }

    async signTransactionOnNetworkForERC(initObj, name, params, privateKey, callType) {
        if (callType === 'SEND') {

            console.log(params);
            let tx;
            if (params.length > 0) {
                tx = {
                    to: initObj.contractAddress,
                    gasPrice: await initObj.web3.eth.getGasPrice(),
                    gas: initObj.web3.utils.toHex(5000000),
                    data: initObj.tokenContractObj.methods[name](...params).encodeABI()
                }

           } else if (callType === 'CALL') {
                tx = {
                    to: initObj.contractAddress,
                    gasPrice: gasPrice,
                    gas: initObj.web3.utils.toHex(5000000),
                    data: initObj.tokenContractObj.methods[name]().encodeABI()
                }
           }

           const signPromise = initObj.web3.eth.accounts.signTransaction(tx, privateKey);
           return await this.signTransactionFn(initObj, signPromise);
        
        } else if (callType === 'CALL') {
            if (params.length > 0) {
                return initObj.tokeContractObj.methods[name](...params).call();
            } else {
                return initObj.tokeContractObj.methods[name]().call();
            }
        }
    }

    async signTransactionOnNetworkForMain(initObj, name, params, privateKey, callType) {
        if (callType === 'SEND') {
           
            let tx;
            if (params.length > 0) {
                tx = {
                    to: initObj.contractAddress,
                    gasPrice: await initObj.web3.eth.getGasPrice(),
                    gas: initObj.web3.utils.toHex(5000000),
                    data: initObj.mainContractObj.methods[name](...params).encodeABI()
                }
           } else if (callType === 'CALL') {
                tx = {
                    to: initObj.contractAddress,
                    gasPrice: gasPrice,
                    gas: initObj.web3.utils.toHex(5000000),
                    data: initObj.mainContractObj.methods[name]().encodeABI()
                }
           }

           const signPromise = initObj.web3.eth.accounts.signTransaction(tx, privateKey);
           return await this.signTransactionFn(initObj, signPromise);

        } else if (callType === 'CALL') {
            if (params.length > 0) {
                return initObj.mainContractObj.methods[name](...params).call();
            } else {
                return initObj.mainContractObj.methods[name]().call();
            }
        }
    }

    signTransactionFn(initObj, signPromise) {
        return new Promise((resolve, reject) => {
            signPromise.then((signedTx) => {
                const sentTx = initObj.web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
                
                sentTx.on("receipt", (receipt) => {
                    console.log('Transaction has been succesfully done');
                    resolve(receipt);
                });
                sentTx.on("error", (error) => {
                    reject(error)
                });
            }).catch((error) => {
                reject(error)
            });
        })
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