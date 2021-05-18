"use strict";
const InitWeb3 = require('./src/initWeb3');
const ContractFunc = require('./src/contractFunc');

class CallWeb3 {

    constructor() {}

    init(_infura, _contractAddress, _mainContractABI, _tokenContractAddress,_tokenContractABI) {
        const initializer = new InitWeb3(_infura, _contractAddress, _mainContractABI, _tokenContractAddress,_tokenContractABI);
        this.web3 = initializer;
        return this.web3;
    }

    callFunc(contractType, name, callType) {
        const call =  CallWeb3.callFunc(this.web3, contractType, name, callType);
        return call;
    }
}

module.exports = CallWeb3;

