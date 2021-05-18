"use strict";
const InitWeb3 = require('./src/initWeb3');

class CallWeb3 {
    #web3 = {};

    constructor() {}

    init(_infura, _contractAddress, _mainContractABI, _tokenContractAddress,_tokenContractABI) {
        const initializer = new InitWeb3(_infura, _contractAddress, _mainContractABI, _tokenContractAddress,_tokenContractABI);
        this.web3 = {
            web3Instance: initializer.web3Instance,
            callContractObj: initializer.mainContractObj,
            callTokenContractObj: initializer.tokenContractObj
        }
    }
}

const callWeb3 = new CallWeb3();
module.exports = callWeb3;

