"use strict";
const InitWeb3 = require('./src/initWeb3');
const ContractFunc = require('./src/contractFunc');

class CallWeb3 {

    constructor() {}

    /**
     * Function: InIt()
     * @param {*} _infura // Curreant Provider - Set Network // Mainnet, rinkeby
     * @param {*} _contractAddress // Contract Address that has to be init
     * @param {*} _mainContractABI // Main Contract ABI JSON FILE
     * @param {*} _tokenContractAddress  // Token contract if any
     * @param {*} _tokenContractABI // Token contract ABI file (JSON) if any
     * @returns Initialized Web3
     */
    init(_infura, _contractAddress, _mainContractABI, _tokenContractAddress,_tokenContractABI) {
        const initializer = new InitWeb3(_infura, _contractAddress, _mainContractABI, _tokenContractAddress,_tokenContractABI);
        this.web3 = initializer;
        return this.web3;
    }

    /**
     * Function: callContract
     * @param {*} contractType // ERC or CONTRACT
     * @param {*} name // Function name in ABI
     * @param {*} params // ALways be in Array ["0x00", "100", ....]
     * @param {*} privateKey // User Wallet Private Key
     * @param {*} callType // CALL or SEND
     * @returns Transaction Reciept or Error
     */
    async callContract(contractType, name, params, privateKey, callType) {
        const call =  await ContractFunc.callFunc(this.web3, contractType, name, params, privateKey, callType);
        return call;
    }
}

module.exports = CallWeb3;

