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

    callFunc(contractType, name, params, privateKey, callType) {
        const call =  ContractFunc.callFunc(this.web3, contractType, name, params, privateKey, callType);
        return call;
    }
}

module.exports = CallWeb3;

